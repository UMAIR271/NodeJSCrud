import { Router } from "express";
import { createUser, getAllUser } from "../controller/user.controller.js";

const router = Router();

router.post("/create-user", createUser);
router.get("/fetch-user", getAllUser);
export default router;
