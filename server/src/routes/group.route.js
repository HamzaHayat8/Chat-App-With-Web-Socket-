import { Router } from "express";
const router = Router();

import {
  getAllGroups,
  getUserGroups,
} from "../controllers/group.controller.js";

router.post("/", getAllGroups);
router.get("/:userId", getUserGroups);

export default router;
