import { Router } from "express";
import { createEvent, getallEvents, deleteEvent, updateEvent } from "../controller/event.controller.js";

const router = Router();

router.post('/create-event', createEvent);
router.get('/events', getallEvents);
router.post('/delete-event', deleteEvent);
router.put('/update-event:id', updateEvent);
export default router;
