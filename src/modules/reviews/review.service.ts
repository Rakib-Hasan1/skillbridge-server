// services/review.service.ts

import { prisma } from "../../lib/prisma";


export const createReviewService = async (
  bookingId: string,
  studentId: string,
  rating: number,
  comment: string,
) => {
  // 1. Find booking
  const booking = await prisma.booking.findUnique({
    where: { id: bookingId },
  });

  if (!booking) throw new Error("Booking not found");

  if (booking.studentId !== studentId)
    throw new Error("You can only review your own bookings");

  // 2. Create review
  const review = await prisma.review.create({
    data: {
      bookingId,
      tutorProfileId: booking.tutorProfileId,
      studentId,
      rating,
      comment,
    },
  });

  // 3. Update tutor average rating
  const stats = await prisma.review.aggregate({
    where: { tutorProfileId: booking.tutorProfileId },
    _avg: { rating: true },
  });

  await prisma.tutorProfile.update({
    where: { id: booking.tutorProfileId },
    data: { rating: stats._avg.rating || 0 },
  });

  return review;
};
