import { Request, Response } from "express";
import { categoryService } from "./category.service";

const createCategory = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const result = await categoryService.createCategory(data);
    res.status(201).json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      error: "Category creation failed!!",
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

const getCategory = async (req: Request, res: Response) => {
  try {
        const user = req.user;
    console.log(user);
    const result = await categoryService.getCategory();
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(404).json({
      error: "Category fetch failed!!",
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const categoryController = {
  createCategory,
  getCategory,
};
