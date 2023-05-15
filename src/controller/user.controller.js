import User from "../models/user.schema.js";
import asyncHandler from "../services/asyncHandler.js";
import CustomError from "../services/CustomError.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const cookieOptions = {
  expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
  httpOnly: true,
};

export const createUser = asyncHandler(async (req, res) => {
  const { FirstName, LastName, userName, email, password, Gender } = req.body;

  if (!userName || !email) {
    throw new CustomError("Please enter userName and email", 400);
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new CustomError("Email already exist", 404);
  }

  const user = await User.create({
    FirstName,
    LastName,
    userName,
    email,
    password,
    Gender,
  });

  const token = user.getJWTtoken();
  console.log(token);
  user.password = undefined;
  res.cookie("token", token, cookieOptions);
  res.status(200).json({
    success: true,
    message: "user created successfully",
    user,
    token,
  });
});

export const getAllUser = asyncHandler(async (req, res) => {
  const allUser = await User.find({});
  if (!allUser) {
    throw new CustomError("ther is no user exisr in DB", 404);
  }
  res.status(200).json({
    success: true,
    message: "all user data",
    allUser,
  });
});
export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select("+password").lean();
  if (!user) {
    throw new CustomError("Invalid credentials", 400);
  }
  const userDoc = new User(user);
  const isPassword = await userDoc.comparePassword(password);
  if (isPassword) {
    const token = userDoc.getJWTtoken();
    userDoc.password = undefined;
    res.cookie("token", token, cookieOptions);
    res.status(200).json({
      success: true,
      message: "Login successfully",
      token,
      userDoc,
    });
  } else {
    throw new CustomError("Invalid credentials", 400);
  }
});
