import Message from "../models/Message.js";

// Get all messages
export async function getAllMessages(req, res) {
  try {
    const { sender, receiver, roomId, text } = req.body;

    const message = new Message({ sender, receiver, roomId, text });
    await message.save();

    res.status(201).json(message);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Get One-to-One chat history
export async function getChatHistory(req, res) {
  const { userId, receiverId } = req.params;

  const messages = await Message.find({
    $or: [
      { sender: userId, receiver: receiverId },
      { sender: receiverId, receiver: userId },
    ],
  }).sort({ createdAt: 1 });

  res.json(messages);
}

//  Get Group chat history
export async function getGroupChatHistory(req, res) {
  const { roomId } = req.params;

  const messages = await Message.find({ roomId }).sort({ createdAt: 1 });
  res.json(messages);
}
