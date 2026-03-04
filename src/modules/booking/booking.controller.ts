import { Request, Response } from "express";
import { bookingServices } from "./booking.service";

const createBooking = async (req: Request, res: Response) => {
  try {
    const studentId = req.user?.id;

    if (!studentId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const { slotId, tutorId } = req.body;

    const booking = await bookingServices.createBooking(
      slotId,
      studentId,
      tutorId,
    );

    res.status(201).json({
      success: true,
      data: booking,
    });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

const getMyBookings = async (req: Request, res: Response) => {
  try {
    const studentId = req.user?.id;

    const bookings = await bookingServices.getMyBookings(studentId!);

    res.status(200).json({
      success: true,
      data: bookings,
    });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const bookingController = {
  createBooking,
  getMyBookings,
};
