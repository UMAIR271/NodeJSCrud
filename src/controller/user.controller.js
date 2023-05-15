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
  const { FisrtName, LastName, userName, email, password, Gender } = req.body;

  if (!userName || !email) {
    throw new CustomError("Please enter userName and email", 400);
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new CustomError("Email already exist", 404);
  }

  const user = await User.create({
    FisrtName,
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
    succss: true,
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
    succss: true,
    message: "all user data",
    allUser,
  });
});

export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = User.findOne({ email }).select("+password");
  if (!user) {
    throw new CustomError("Invalid credentials", 400);
  }
  const isPassword = await comparePassword(password);
  if (isPassword) {
    const token = user.getJWTtoken();
    user.password = undefined;
    res.cookie("token", token, cookieOptions);
    res.status(200).json({
      succss: true,
      message: "Login succssfully",
      token,
      user,
    });
    throw new CustomError("password dost match", 400);
  }
});
