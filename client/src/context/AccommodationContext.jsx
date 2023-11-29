import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const defaultState = {
  accommodations: [],
  detailAccommodation: null,
  getDetailAccommodation: (id) => {},
};

const AccommodationContext = createContext(defaultState);

//
const AccommodationProvider = ({ children }) => {
  const [accommodations, setAccommodations] = useState([]);
  const [detailAccommodation, setDetailAccommodation] = useState(null);

  useEffect(() => {
    getAccommodations();
  }, []);

  const getAccommodations = () => {
    axios
      .get("http://localhost:8000/api/accommodations")
      .then((response) => {
        console.log("Response from backend:", response.data);
        setAccommodations(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const getDetailAccommodation = (accommodationId) => {
    axios
      .get(`http://localhost:8000/api/accommodations/${accommodationId}`)
      .then((response) => {
        console.log("Detail Accommodation Data:", response.data);
        setDetailAccommodation(response.data);
      })
      .catch((error) => {
        console.error("Error fetching detail accommodation data:", error);
      });
  };

  return (
    <AccommodationContext.Provider
      value={{ accommodations, detailAccommodation, getDetailAccommodation }}
    >
      {children}
    </AccommodationContext.Provider>
  );
};

export const useAccommodations = () => {
  return useContext(AccommodationContext);
};

export default AccommodationProvider;
