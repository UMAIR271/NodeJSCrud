import { Router } from "express";
import {
  createIssue,
  deleteIssue,
  getAllIssue,
  getIssueById,
} from "../controller/isuee.controllor.js";
const router = Router();

router.post("/issue-create", createIssue);
router.get("/allIssueData", getAllIssue);
router.post("/getIssueById", getIssueById);
router.post("/deleteIsuue", deleteIssue);
router.put("/updateIssue/:id", deleteIssue);
export default router;
