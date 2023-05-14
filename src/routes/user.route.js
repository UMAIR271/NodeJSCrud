import { Router } from "express";
import { createUser } from "../controller/user.controller.js";

const router = Router();

router.post("/create-user", createUser);
// router.get("/fetch-")
export default router;
