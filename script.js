const express = require("express");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.static("uploads"));

// Configure Multer
const storage = multer.diskStorage({
    destination: "uploads/",
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
    },
});

const upload = multer({ storage });

// Routes
app.post("/upload", upload.single("file"), (req, res) => {
    if (!req.file) {
        return res.status(400).send("No file uploaded.");
    }
    res.json({ filename: req.file.filename });
});

app.get("/files/:filename", (req, res) => {
    const filepath = path.join(__dirname, "uploads", req.params.filename);
    res.download(filepath);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
