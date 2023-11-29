const mongoose = require("mongoose");

// Schema for place
const placeSchema = mongoose.Schema({
  title: { type: String, required: true },
  host: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  images: [String],
});

module.exports = mongoose.model("place", placeSchema);
