const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose"); 
const indexRoute = require('./routes/index.routes');

dotenv.config();

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017/n211";

const app = express();
app.use(express.json());

app.use("/api", indexRoute);

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

async function bootstrap() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("✅ MongoDB connected");

    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port: ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Connection error:", error.message);
  }
}

bootstrap();

