import { Request, Response } from "express";
import { tutorAvailabilityServices } from "./availability.service";

const createAvailability = async (req: Request, res: Response) => {
  const userId = req.user?.id;

  const result = await tutorAvailabilityServices.createAvailability(
    userId!,
    req.body,
  );

  res.status(201).json({
    success: true,
    message: "Availability created successfully",
    data: result,
  });
};

const getAvailability = async (req: Request, res: Response) => {
  const { tutorId } = req.params;

  const result = await tutorAvailabilityServices.getAvailability(
    tutorId as string,
  );

  res.status(200).json({
    success: true,
    data: result,
  });
};

export const tutorAvailabilityController = {
  createAvailability,
  getAvailability,
};
