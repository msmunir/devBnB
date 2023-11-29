//Express and cors to initialize the server
const express = require("express");
const app = express();
const cors = require("cors");

//Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Controllers
app.use("/api/users", require("./Controllers/userController"));
// app.use(
//   "/api/accommodations",
//   require("./Controllers/accommodationController")
// );
// app.use("/api/reservations", require("./Controllers/reservationController"));

app.use("/api/places", require("./Controllers/placeController"));
app.use("/api/bookings", require("./Controllers/bookingController"));

//Export app
module.exports = app;
