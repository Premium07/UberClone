const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");

module.exports.authUser = async (req, res, next) => {
  try {
    // Safely retrieve token from cookies or Authorization header
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

    // If no token is provided, return Unauthorized
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // Check if the token is blacklisted
    const isBlackListed = await userModel.findOne({ token });
    if (isBlackListed) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find the user in the database
    const user = await userModel.findById(decoded._id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "Unauthorized: User not found" });
    }

    req.user = user; // Attach user to the request object

    // Proceed to the next middleware
    return next();
  } catch (error) {
    console.error("Authentication error:", error);
    return res
      .status(401)
      .json({ message: "Unauthorized: Invalid or expired token" });
  }
};
