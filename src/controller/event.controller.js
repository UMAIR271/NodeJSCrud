import Event from "../models/event.schema.js";
import asyncHandler from "../services/asyncHandler.js";
import CustomError from "../services/CustomError.js";

export const createEvent = asyncHandler(async (req, res) => {
  const { name, duration, collectionId } = req.body;

  if (!name || !duration || !collectionId) {
    throw new CustomError("Invalid event", 400);
  }

  const event = await Event.create({
    name,
    duration,
    collectionId,
  });

  if (!event) {
    throw new CustomError("Couldn't create event", 400);
  }

  res.status(200).json({
    success: true,
    message: "Event created",
    event,
  });
});

export const getallEvents = asyncHandler(async (req, res) => {
  const allEvents = await Event.find();
  if (!allEvents) {
    throw new CustomError("No events found", 400);
  }
  res.status(200).json({
    success: true,
    allEvents,
  });
});

export const getEventById = asyncHandler(async (req, res) => {
  const { _id } = req.body;
  if (!_id) {
    throw new CustomError("id field is required", 400);
  }
  const eventData = await Event.findById(_id);
  res.status(200).json({
    success: true,
    message: "Issue data",
    eventData,
  });
});

export const deleteEvent = asyncHandler(async (req, res) => {
  const { _id } = req.body;
  if (!_id) {
    throw new CustomError("Invalid id", 400);
  }
  const deleteEvent = await Event.findOneAndDelete({ _id });

  res.status(200).json({
    success: true,
    message: "Issue data is deleted",
  });
});

export const updateEvent = asyncHandler(async (req, res) => {
  const updateData = await addIssue.findByIdAndUpdate(req.parms.id, req.body);
  if (!updateData) {
    throw new CustomError("provide details for event update", 400);
  }
  res.status(200).json({
    success: true,
    message: "data is updated successfully",
  });
});
