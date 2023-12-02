import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const defaultState = {
  places: [],
  detailPlace: null,
  getDetailPlace: (id) => {},
};

const PlaceContext = createContext(defaultState);

// Create a PlaceProvider component that wraps your app and makes the state available to any child component that calls usePlaces().
const PlaceProvider = ({ children }) => {
  const [places, setPlaces] = useState([]);
  const [detailPlace, setDetailPlace] = useState(null);

  useEffect(() => {
    getPlaces();
  }, []);

  const getPlaces = () => {
    axios
      .get("http://localhost:8000/api/places")
      .then((response) => {
        console.log(response.data);
        setPlaces(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getDetailPlace = (placeId) => {
    axios
      .get(`http://localhost:8000/api/places/${placeId}`)
      .then((response) => {
        console.log("Place information", response.data);
        setDetailPlace(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <PlaceContext.Provider value={{ places, detailPlace, getDetailPlace }}>
      {children}
    </PlaceContext.Provider>
  );
};

export const usePlaces = () => {
  return useContext(PlaceContext);
};

export default PlaceProvider;
