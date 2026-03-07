import { tutorService } from "./tutor.service";
import { Request, Response } from "express";

const searchTutorsController = async (req: Request, res: Response) => {
  try {
    const { category, minPrice, maxPrice, rating } = req.query;

    const tutors = await tutorService.searchTutorsService({
      category: category as string,
      minPrice: Number(minPrice),
      maxPrice: Number(maxPrice),
      rating: Number(rating),
    });

    res.json({
      success: true,
      data: tutors,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const tutorController = {
  searchTutorsController,
};
