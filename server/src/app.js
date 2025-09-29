import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import Routes
import userRouter from "./routes/user.route.js";
import messageRouter from "./routes/message.route.js";

// Routes
app.use("/api/user", userRouter);
app.use("/api/message", messageRouter);

export default app;
