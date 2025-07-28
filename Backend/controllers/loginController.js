import User from "../model/user.js";
import jwt from "jsonwebtoken";

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ message: "Missing fields" });

  const user = await User.findOne({ email });
  if (!user || !(await user.matchPassword(password))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  res.json({ message: "Login successful", token });
};

export const registerUser = async (req, res) => {
  const { name, email, password, role } = req.body;
  if (!name || !email || !password)
    return res.status(400).json({ message: "Missing fields" });

  if (await User.findOne({ email })) {
    return res.status(400).json({ message: "Email already taken" });
  }

  const user = await User.create({ name, email, password, role });
  res.status(201).json({ message: "User registered", userId: user._id });
};
