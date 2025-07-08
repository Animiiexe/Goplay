import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:8000", // Adjust the origin as needed
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  }),
);

app.use(
  express.json({
    limit: "40kb", // Set a higher limit for JSON payloads
  }),
);
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

export default app;
