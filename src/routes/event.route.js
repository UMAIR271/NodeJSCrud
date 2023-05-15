import { Router } from "express";
import { createEvent } from "../controller/event.controller.js";

const router = Router();

router.post('/create-event', createEvent);

export default router;
