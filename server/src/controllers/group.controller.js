import Group from "../models/Group.js";

//  Create group
export async function getAllGroups(req, res) {
  try {
    const { name, members, admins } = req.body;

    const group = new Group({ name, members, admins });
    await group.save();

    res.status(201).json(group);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


//  Get user groups
export async function getUserGroups (req, res) {
    const { userId } = req.params;

  const groups = await Group.find({ members: userId }).populate("members admins", "-password");
  res.json(groups);
}