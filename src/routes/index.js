import { Router } from "express";
import userRoute from "./user.route.js";
import issueRoute from "./issue.router.js";
import eventRoute from "./event.route.js";

const router = Router();

router.use("/user", userRoute);
router.use("/issue", issueRoute);
router.use("/event", eventRoute);

export default router;
