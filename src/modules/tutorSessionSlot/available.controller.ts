import { Request, Response } from "express";
import { tutorAvailabilityServices } from "./available.service";

const createAvailability = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id; // from auth middleware

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const result = await tutorAvailabilityServices.createAvailability(
      req.body,
      userId,
    );

    res.status(201).json({
      success: true,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      message: error.message || "Something went wrong",
    });
  }
};

const getMyAvailability = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;

    const slots = await tutorAvailabilityServices.getMyAvailability(userId!);

    res.status(200).json({
      success: true,
      data: slots,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

const getTutorAvailability = async (req: Request, res: Response) => {
  try {
    const { tutorId } = req.params;

    const slots = await tutorAvailabilityServices.getTutorAvailability(
      tutorId as string,
    );

    res.status(200).json({
      success: true,
      data: slots,
    });
  } catch (error: any) {
    res.status(500).json({
      message: error.message || "Something went wrong",
    });
  }
};

export const tutorAvailabilityController = {
  createAvailability,
  getTutorAvailability,
  getMyAvailability,
};
