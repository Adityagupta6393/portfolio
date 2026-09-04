const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const githubRoutes = require("./routes/githubRoutes");
const leetcodeRoutes = require("./routes/leetcodeRoutes");
const contactRoutes = require("./routes/contactRoutes");
const app = express();

app.use(
    cors({
        origin: process.env.CLIENT_URL
    })
);

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Portfolio API is running"
    });
});

app.use("/api/github", githubRoutes);
app.use("/api/leetcode", leetcodeRoutes);
app.use("/api/contact", contactRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});