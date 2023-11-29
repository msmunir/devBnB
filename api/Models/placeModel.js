const Place = require("../Schemas/placeSchema");

// Create new place
exports.createNewPlace = (req, res) => {
  const { title, host, location, description, price, imageUrl } = req.body;
  const images = req.body.images || [];

  if (!title || !host || !location || !description || !price || !imageUrl) {
    res.status(400).json({
      message: "Please enter all the fields",
    });
    return;
  }

  Place.create({
    title,
    host,
    location,
    description,
    price,
    imageUrl,
    images,
  })
    .then((data) => res.status(201).json(data))
    .catch(() =>
      res.status(500).json({
        message: "Adding the place failed",
      })
    );
};

// Get all places
exports.getPlaces = (req, res) => {
  Place.find()
    .then((places) => {
      res.status(200).json(places);
    })
    .catch(() => {
      res.status(500).json({
        message: "Places could not be found",
      });
    });
};

// Get place by id
exports.getPlaceById = (req, res) => {
  Place.findById(req.params.id)
    .then((place) => {
      if (!place) {
        res.status(404).json({ message: "Place dont exist" });
        return;
      }

      res.status(200).json(place);
    })
    .catch(() => {
      res.status(500).json({
        message: "Places could not be found",
      });
    });
};

// Update place
exports.updatePlace = (req, res) => {
  Place.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((place) => {
      if (!place) {
        res.status(404).json({ message: "Place dont exist" });
        return;
      }

      res.status(200).json(place);
    })
    .catch(() => {
      res.status(500).json({
        message: "Places could not be found",
      });
    });
};

// Delete place
exports.deletePlace = (req, res) => {
  Place.findByIdAndDelete(req.params.id)
    .then((place) => {
      if (!place) {
        res.status(404).json({ message: "Place dont exist" });
        return;
      }

      res.status(200).json({ id: place._id });
    })
    .catch(() => {
      res.status(500).json({
        message: "Places could not be found",
      });
    });
};
