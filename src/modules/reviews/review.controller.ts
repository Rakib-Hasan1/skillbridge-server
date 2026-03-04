// controllers/review.controller.ts
import { Request, Response } from "express";
import { createReviewService } from "./review.service";

export const createReviewController = async (req: Request, res: Response) => {
  try {
    const { bookingId, rating, comment } = req.body;

    const user = req.user; // Better Auth sets this
    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    // Get student id from auth middleware
    const studentId = user.id;

    const review = await createReviewService(
      bookingId,
      studentId,
      rating,
      comment,
    );

    res.json({ success: true, data: review });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};
