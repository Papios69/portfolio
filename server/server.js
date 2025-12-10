const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// --- middleware ---
app.use(cors());
app.use(express.json());

// --- Mongo setup (optional but ready for Atlas) ---
const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
  console.warn("⚠️  No MONGO_URI set. Messages will NOT be saved to a database yet.");
} else {
  mongoose
    .connect(mongoUri)
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch((err) => console.error("MongoDB connection error:", err));
}

// Schema/model (used if DB is connected)
const messageSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    message: String
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);

// Fallback in-memory store (so API still works even without DB)
const inMemoryMessages = [];

// --- routes ---

// Simple health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// Contact form endpoint
app.post("/api/contact", async (req, res) => {
  try {
    const data = req.body;
    console.log("📩 New contact message:", data);

    if (mongoose.connection.readyState === 1) {
      // Connected to Mongo – save to DB
      const doc = await Message.create(data);
      return res.status(201).json({ ok: true, savedTo: "db", doc });
    } else {
      // No DB – save in memory only
      inMemoryMessages.push({ ...data, createdAt: new Date() });
      return res.status(201).json({ ok: true, savedTo: "memory" });
    }
  } catch (err) {
    console.error("Error in /api/contact:", err);
    res.status(500).json({ error: "Failed to save message" });
  }
});


// Path to the React build
const distPath = path.join(__dirname, "dist");

app.use(express.static(distPath));

app.get("*", (req, res) => {
  if (req.path.startsWith("/api")) {
    return res.status(404).json({ error: "API route not found" });
  }

  res.sendFile(path.join(distPath, "index.html"));
});

//  Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});