import Event from "../models/event.schema.js"
import asyncHandler from "../services/asyncHandler.js";
import CustomError from "../services/CustomError.js";


export const createEvent = asyncHandler( async (res,req) => {
    const { name , duration } = req.body

    if (!name || !duration) {
        throw new CustomError("Invalid event",400)
    }

    const event = Event.create({
        name, duration
    })

    if(!event){
        throw new CustomError("Couldn't create event",400)
    }

    res.status(200).json({
        success: true,
        message: "Event created",
        event
    })
})