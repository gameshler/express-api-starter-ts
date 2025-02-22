import "dotenv/config";
import express from "express";
import { CLIENT_URL, PORT } from "./constants/env";
import connectionToDatabase from "./config/db";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: CLIENT_URL,
    credentials: true,
  })
);
app.use(cookieParser());
app.get("/", (_, res) => {
  res.status(200).json({
    status: "healthy",
  });
});

app.listen(PORT, async () => {
  console.log(`Server is running on ${PORT}`);
  await connectionToDatabase();
});
