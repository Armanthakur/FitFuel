import 'dotenv/config';
import express from "express";
import "./config/db.js"; 
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";


const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

const PORT = 5000;

app.get("/", (req, res) => {
    res.json({ message: "FitFuel API is running" });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

