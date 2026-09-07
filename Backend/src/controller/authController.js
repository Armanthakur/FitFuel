import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


const registerUser = async (req, res) => {
  const { username, password, name, age, height, weight } = req.body;

  const exists = await User.findOne({ username });
  if (exists) return res.status(400).json({ message: "Username exists" });

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    username,
    password: hashedPassword,
    name,
    age,
    height,
    weight,
  });

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

  res.json({ token });
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

  res.json({ token });
};

export { registerUser, loginUser };