const router = require("express").Router();
const reservationModel = require("../Models/reservationModel");
const auth = require("../Authentication/auth");

// Create a new reservation
router.post("/", auth.verifyToken, reservationModel.createNewReservation);

// Get all reservations
router.get("/", reservationModel.getReservations);

// Get all reservations for a user
router.get("/user/me", auth.verifyToken, reservationModel.getUserReservations);

// Get a reservation by id
router.get("/:id", reservationModel.getReservationById);

// Update a reservation by id
router.put("/:id", reservationModel.updateReservation);

// Delete a reservation by id
router.delete("/:id", reservationModel.deleteReservation);

module.exports = router;
