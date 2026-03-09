import express from "express";
import { profileRouter } from "./modules/tutorProfile/profile.router";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";
import cors from "cors";
import { categoryRouter } from "./modules/category/category.router";
import { availabilityRouter } from "./modules/tutorSessionSlot/available.router";
import { bookingRouter } from "./modules/booking/booking.router";
import { reviewsRouter } from "./modules/reviews/review.router";
import { tutorRouter } from "./modules/tutor/tutor.router";
import { adminRouter } from "./modules/admin/admin.router";
import { userProfileRouter } from "./modules/userProfile/userProfile.router";

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
app.use("/bookings", bookingRouter);
app.use("/availability", availabilityRouter);
app.use("/reviews", reviewsRouter);
app.use("/search", tutorRouter);
app.use("/admin", adminRouter);
app.use("/user", userProfileRouter)

export default app;
