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
    success: true,
    message: "Issue data created successfully",
    issueData,
  });
});

export const getAllIssue = asyncHandler(async (req, res) => {
  const issueData = await addIssue.find({});
  res.status(200).json({
    success: true,
    message: "Issue data",
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
    success: true,
    message: "Issue data is deleted",
  });
});

export const updateIssue = asyncHandler(async (req, res) => {
  const updateData = await addIssue.findByIdAndUpdate(req.parms.id, req.body);
  if (!updateData) {
    throw new CustomError("provide details for issue update", 400);
  }
  res.status(200).json({
    success: true,
    message: "data is updated successfully",
  });
});
