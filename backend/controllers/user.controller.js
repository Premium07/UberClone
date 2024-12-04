const BlackListToken = require("../models/blackListToken");
// const blackListToken = require("../models/blackListToken");
const userModel = require("../models/user.model");
const userService = require("../services/user.services");
const { validationResult } = require("express-validator");

module.exports.registerUser = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullName, email, password } = req.body;

  const isUserAlreadyExists = await userModel.findOne({ email });
  if (isUserAlreadyExists) {
    return res
      .status(400)
      .json({ message: `User already exists with this ${email}` });
  }

  const hashedPassword = await userModel.hashPassword(password);

  const user = await userService.createUser({
    firstName: fullName.firstName,
    lastName: fullName.lastName,
    email,
    password: hashedPassword,
  });

  const token = user.generateAuthToken();

  res.status(201).json({ token, user });
};

module.exports.loginUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  const user = await userModel.findOne({ email }).select("+password");

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const isMatch = await user.comparePassword(password);

  if (!isMatch) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = user.generateAuthToken();
  res.cookie("token", token);

  res.status(200).json({ token, user });
};

module.exports.getUserProfile = async (req, res, next) => {
  return res.status(200).json(req.user);
};

module.exports.logoutUser = async (req, res, next) => {
  try {
    // Clear the token from cookies
    res.clearCookie("token");

    // Safely retrieve the token from cookies or Authorization header
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

    // If no token is found, respond with success since the user is effectively logged out
    if (!token) {
      return res.status(200).json({ message: "User Logged out Successfully" });
    }

    // Verify and blacklist the token (optional, based on your application's needs)
    try {
      jwt.verify(token, process.env.JWT_SECRET); // Verify token before blacklisting
      await BlackListToken.create({ token }); // Add to blacklist if valid
    } catch (error) {
      console.warn(
        "Logout attempted with invalid/expired token:",
        error.message
      );
      // No need to fail logout for invalid/expired tokens
    }

    return res.status(200).json({ message: "User Logged out Successfully" });
  } catch (error) {
    console.error("Logout error:", error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
