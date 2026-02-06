import { Request, Response } from "express";
import { tutorAvailabilityService } from "./available.service";

const createAvailability = async (req: Request, res: Response) => {
  try {
    // auth middleware guarantees this
    const user = req.user;
    console.log(user);
    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const result = await tutorAvailabilityService.createAvailability(
      user?.id,
      req.body
    );

    return res.status(201).json(result);
  } catch (error) {
    return res.status(400).json({
      error: "Tutor availability creation failed",
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const tutorAvailabilityController = {
  createAvailability,
};
