import { Router } from "express";
const router = Router();

import {
  getAllMessages,
  getChatHistory,
  getGroupChatHistory,
} from "../controllers/message.controller.js";

router.post("/", getAllMessages);
router.get("/chat/:userId/:receiverId", getChatHistory);
router.get("/group/:roomId", getGroupChatHistory);

export default router;
