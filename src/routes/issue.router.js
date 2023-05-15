import { Router } from "express";
import { createIssue, deleteIssue } from "../controller/isuee.controllor.js";
const router = Router();

router.post("/issue-create", createIssue);
router.post("/deleteIsuue", deleteIssue);
export default router;
