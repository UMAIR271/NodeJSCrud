import User from "../models/user.schema.js";
import asyncHandler from "../services/asyncHandler.js";
import CustomError from "../services/CustomError.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const createUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, userName, email, password, gender } = req.body;

  if (!userName || !email) {
    throw new CustomError("Please enter name and email", 400);
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new CustomError("Email already exist", 404);
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  
  const newUser = new User({ email, password: hashedPassword });
  newUser.save();

  const user = await User.create({ name, email });
  res.status(200).json({
    succss: true,
    message: "user created successfully",
    user,
  });
});

export const getAllUser = asyncHandler(async (req, res) => {
  const allUser = await User.find({});
  if (!allUser) {
    throw new CustomError("ther is no user exisr in DB", 404);
  }
  res.status(200).json({
    succss: true,
    message: "all user data",
    allUser,
  });
});
