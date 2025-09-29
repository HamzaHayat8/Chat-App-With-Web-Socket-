import { Router } from "express";
const router = Router();

import {
  register,
  login,
  getAllUsers,
} from "../controllers/user.controller.js";

router.post("/register", register);
router.post("/login", login);
router.get("/", getAllUsers);

export default router;
