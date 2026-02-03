import { Request, Response } from "express";
import { TutorProfileService } from "./profile.service";

const createProfile = async (req: Request, res: Response) => {
  try {
    const result = await TutorProfileService.createProfile(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({
      error: "Profile creation failed!!",
      details: error,
    });
  }
};

export const TutorProfileController = {
  createProfile,
};
