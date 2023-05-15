import { Router } from "express";
import {
  createIssue,
  deleteIssue,
  getAllIssue,
} from "../controller/isuee.controllor.js";
const router = Router();

router.post("/issue-create", createIssue);
router.post("/allIssueData", getAllIssue);
router.post("/deleteIsuue", deleteIssue);
router.put("/updateIssue/:id", deleteIssue);
export default router;
