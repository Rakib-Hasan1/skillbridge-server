import { Request, Response } from "express";
import { getAllBookingsService, getAllUsersService, toggleUserBanService } from "./admin.service";


export const getAllUsersController = async (req: Request, res: Response) => {
  try {

    const users = await getAllUsersService();

    res.status(200).json({
      success: true,
      data: users,
    });

  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAllBookingsController = async (req: Request, res: Response) => {
  try {
    const bookings = await getAllBookingsService();

    res.status(200).json({
      success: true,
      data: bookings,
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};


export const toggleUserBanController = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const { ban } = req.body;

    if (typeof ban !== "boolean") {
      return res.status(400).json({ success: false, message: "Invalid ban value" });
    }

    const user = await toggleUserBanService(userId as string, ban);

    res.status(200).json({
      success: true,
      data: user,
      message: `User has been ${ban ? "banned" : "unbanned"} successfully`,
    });

  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};