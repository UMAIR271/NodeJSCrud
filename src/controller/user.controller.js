import User from "../models/user.schema.js";
import asyncHandler from "../services/asyncHandler.js";
import CustomError from "../services/CustomError.js";

export const createUser = asyncHandler(async (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    throw new CustomError("Please enter name and email", 400);
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new CustomError("Email already exist", 404);
  }

  const user = await User.create({ name, email });
  res.status(200).json({
    succss: true,
    message: "user created successfully",
    user,
  });
});


