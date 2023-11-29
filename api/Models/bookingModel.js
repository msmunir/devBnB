const Booking = require("../Schemas/bookingSchema");

// Create new booking
exports.createNewBooking = async (req, res) => {
  const { place, checkin, checkout } = req.body;
  const { _id: user } = req.userData;
  console.log("REQ BODY", req.body);
  if (!user || !place || !checkin || !checkout) {
    res.status(400).json({
      message: "Please enter all the fields",
    });
    return;
  }
  try {
    const newBooking = await Booking.create({ user, place, checkin, checkout });
    await newBooking.populate("place");

    res.status(201).json(newBooking);
  } catch (error) {
    console.log("Booking error", error);
    res.status(500).json({ message: "Error, create booking" });
  }
};

// Get all bookings
exports.getBookings = (req, res) => {
  Booking.find()
    .then((bookings) => {
      res.status(200).json(bookings);
    })
    .catch(() => {
      res.status(500).json({ message: "Error, all bookings" });
    });
};

// Get booking by id
exports.getBookingById = (req, res) => {
  Booking.findById(req.params.id)
    .then((booking) => {
      if (!booking) {
        res.status(404).json({ message: "Booking could not be found" });
        return;
      }

      res.status(200).json(booking);
    })
    .catch(() => {
      res.status(500).json({ message: "Error, specifik booking" });
    });
};

// Update booking by id
exports.updateBooking = (req, res) => {
  Booking.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((booking) => {
      if (!booking) {
        res.status(404).json({ message: "Booking could not be found" });
        return;
      }

      res.status(200).json(booking);
    })
    .catch(() => {
      res.status(500).json({
        message: "Error, updating booking",
      });
    });
};

// Delete booking by id
exports.deleteBooking = (req, res) => {
  Booking.findByIdAndDelete(req.params.id)
    .then((booking) => {
      if (!booking) {
        res.status(404).json({ message: "Booking could not be found" });
        return;
      }

      res.status(200).json({ id: booking._id });
    })
    .catch(() => {
      res.status(500).json({
        message: "Error, deleting booking",
      });
    });
};

// Get bookings by user id
exports.getUserBookings = (req, res) => {
  const { _id } = req.userData;
  Booking.find({ user: _id })
    .populate("place")
    .then((bookings) => {
      res.status(200).json(bookings);
    })
    .catch((error) => {
      console.log("ERROR: getting user bookings", error);
      res.status(500).json({
        message: "Error, getting user bookings",
      });
    });
};
