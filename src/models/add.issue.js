import mongoose from "mongoose";

const issueSchema = new mongoose.Schema(
  {
    issueName: {
      type: String,
      required: [true, "issueName is required"],
      maxLenght: [100, "name must be less then 50 char"],
    },
    Duration: {
      type: Number,
      required: [true, "Duration is required"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Issue", issueSchema);
