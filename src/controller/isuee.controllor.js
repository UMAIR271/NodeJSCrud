import addIssue from "../models/add.issue.js";
import asyncHandler from "../services/asyncHandler.js";
import CustomError from "../services/CustomError.js";

export const createIssue = asyncHandler(async (req, res) => {
  const { issueName, Duration } = req.body;
  if (!issueName || !Duration) {
    throw new CustomError("this field is required", 400);
  }
  const issueData = await addIssue.create({ issueName, Duration });
  res.status(200).json({
    succss: true,
    message: "Issue data created successfully",
    issueData,
  });
});

export const deleteIssue = asyncHandler(async (req, res) => {
  const { id } = req.body;
  if (!id) {
    throw new CustomError("id field is required", 400);
  }
  const deleteData = await addIssue.findOneAndDelete({ id });
  res.status(200).json({
    succss: true,
    message: "Issue data is deleted",
  });
});

export const editIssue = asyncHandler(async (req, res) => {
    const { id } = req.body;
    if (!id) {
      throw new CustomError("id field is required", 400);
    }
    const deleteData = await addIssue.findByIdAndUpdate({ id, issueName, Duration, });
    res.status(200).json({
      succss: true,
      message: "Issue data is deleted",
    });
  });
