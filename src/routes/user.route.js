import { Router } from "express";
import {
  createUser,
  getAllUser,
  loginUser,
} from "../controller/user.controller.js";

const router = Router();

router.post("/create-user", createUser);
router.get("/fetch-user", getAllUser);
router.post("/login", loginUser);

export default router;
