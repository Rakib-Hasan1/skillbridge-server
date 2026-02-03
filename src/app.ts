import express from "express";
import { profileRouter } from "./modules/tutorProfile/profile.router";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";
import cors from "cors"

const app = express();

app.use(
  cors({
    origin: process.env.APP_URL || "http://localhost:3000",
  }),
);

app.all("/api/auth/{*any}", toNodeHandler(auth));

app.get("/", (req, res) => {
  res.send("Hello From Skillbridge");
});

app.use("/profile", profileRouter);

export default app;
