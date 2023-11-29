const router = require("express").Router();
const placeModel = require("../Models/placeModel");

// Create new place
router.post("/", placeModel.createNewPlace);

// Get all places
router.get("/", placeModel.getPlaces);

// Get place by id
router.get("/:id", placeModel.getPlaceById);

// Update place
router.put("/:id", placeModel.updatePlace);

// Delete place
router.delete("/:id", placeModel.deletePlace);

module.exports = router;
