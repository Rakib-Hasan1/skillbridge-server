import { Request, Response } from "express";

const createBooking = async (req: Request, res: Response) => {
  console.log(req.user);
};

export const bookingController = {
  createBooking,
};
