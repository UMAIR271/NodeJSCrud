import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
      maxLenght: [50, "name must be less then 50 char"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
