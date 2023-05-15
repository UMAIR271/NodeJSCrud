import { Router } from "express";
import userRoute from "./user.route.js";
import issueRoute from "./issue.router.js";

const router = Router();

router.use("/user", userRoute);
router.use("/issue", issueRoute);

export default router;
