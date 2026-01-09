import "dotenv/config";
import express from "express";
import cors from "cors";

import "./config/db.js"; // 👈 IMPORTANTE: força inicialização
import movieRoutes from "./routes/movieRoutes.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/movies", movieRoutes);
app.use("/auth", authRoutes);

app.listen(5001, () => {
  console.log("Server running on PORT 5001");
});
