import express from "express";
import { profileRouter } from "./modules/tutorProfile/profile.router";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";
import cors from "cors";
import { categoryRouter } from "./modules/category/category.router";
import { availabilityRouter } from "./modules/tutorSessionSlot/available.router";

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: process.env.APP_URL || "http://localhost:3000",
    credentials: true,
  }),
);

app.all("/api/auth/{*any}", toNodeHandler(auth));

app.get("/", (req, res) => {
  res.send("Hello From Skillbridge");
});

app.use("/profile", profileRouter);
app.use("/category", categoryRouter);
// app.use("/booking", bookingRouter);
app.use("/availability", availabilityRouter);

export default app;
