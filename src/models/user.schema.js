import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    FisrtName: {
      type: String,
      required: [true, "FirstName is required"],
      maxLenght: [50, "name must be less then 50 char"],
    },
    LastName: {
      type: String,
      required: [true, "LastName is required"],
      maxLenght: [50, "name must be less then 50 char"],
    },
    UserName: {
      type: String,
      required: [true, "user name is required"],
      maxLenght: [50, "name must be less then 50 char"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    Gender: {
      type: String,
      required: [true, "Gender is required"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
