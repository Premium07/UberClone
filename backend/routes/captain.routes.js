const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const { registerCaptain } = require("../controllers/captain.controller");

router.post("/register", [
  body("email").isEmail().withMessage("Invalid Email"),
  body("fullName.firstName")
    .isLength({ min: 3 })
    .withMessage("First name must be at least 3 characters"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 charaters long"),
  body("vehicle.color")
    .isLength({ min: 3 })
    .withMessage("color must be atleat 3 characters"),
  body("vehicle.plate")
    .isLength({ min: 3 })
    .withMessage("plate must be atleat 3 characters"),
  body("vehicle.capacity")
    .isInt({ min: 1 })
    .withMessage("capacity must be atleat 3 characters"),
  body("vehicle.vehicleType")
    .isIn(["car", "motorcycle", "auto"])
    .withMessage("Invalid vehicle type"),
], registerCaptain);

module.exports = router;
