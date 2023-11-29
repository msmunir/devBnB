// Import mongoose, cors, express, dontenv, app
const mongoose = require("mongoose");
const app = require("./app");

require("dotenv").config();

// Set port and listen to it, connect to database
const PORT = process.env.PORT || 8000;
const MONGO_URI = process.env.MONGO_URI;

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log(err));
