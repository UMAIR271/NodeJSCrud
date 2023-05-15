import Event from "../models/event.schema.js"
import asyncHandler from "../services/asyncHandler.js";
import CustomError from "../services/CustomError.js";


export const createEvent = asyncHandler( async (req,res) => {
    const { name , duration, collectionId  } = req.body

    if (!name || !duration || !collectionId) {
        throw new CustomError("Invalid event",400)
    }

    const event = await Event.create({
        name, duration , collectionId
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