const router = require("express").Router();
const bookingModel = require("../Models/bookingModel");
const auth = require("../Authentication/auth");

// Create a new booking
router.post("/", auth.verifyToken, bookingModel.createNewBooking);

// Get all bookings
router.get("/", bookingModel.getBookings);

// Get a booking by id
router.get("/:id", bookingModel.getBookingById);

// Update a booking by id
router.put("/:id", bookingModel.updateBooking);

// Delete a booking by id
router.delete("/:id", bookingModel.deleteBooking);

// Get all bookings for a user
router.get("/user/profile", auth.verifyToken, bookingModel.getUserBookings);
// router.get("/user/me", auth.verifyToken, bookingModel.getUserBookings);

module.exports = router;
