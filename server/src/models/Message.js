import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  receiver: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  roomId: { type: mongoose.Schema.Types.ObjectId, ref: "Group" }, 
  text: { type: String },
  media: { type: String }, // image/video/file
  status: { type: String, enum: ["sent", "delivered", "read"], default: "sent" },
}, { timestamps: true });

export default mongoose.model("Message", messageSchema);