import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// Default state
const defaultState = {
  token: null,
  user: null,
  reservations: [],
  setToken: (token) => {},
  makeReservation: (reservation) => {},
};

// UserContext
const UserContext = createContext(defaultState);

// UserProvider
const UserProvider = ({ children }) => {
  // User state
  const [userState, setUserState] = useState(defaultState);

  // Set Token
  const setToken = (token) => {
    setUserState((prevState) => ({ ...prevState, token }));
  };

  // Make Reservation
  const makeReservation = (reservation) => {
    setUserState((prevState) => ({
      ...prevState,
      reservations: [...prevState.reservations, reservation],
    }));
  };

  useEffect(() => {
    const token = localStorage.getItem("TOKEN");
    if (token !== null) {
      setUserState((prevState) => ({
        ...prevState,
        token,
      }));
    }
  }, []);

  // Fetch user data and reservations when token changes
  useEffect(() => {
    if (userState.token) {
      fetchUserData();
    }
  }, [userState.token]);

  // Fetch user data and reservations
  const fetchUserData = async () => {
    try {
      // const userData = await axios.get("http://localhost:5000/api/users/me", {
      const userData = await axios.get(
        "http://localhost:8000/api/users/profile",
        {
          headers: {
            Authorization: `Bearer ${userState.token}`,
          },
        }
      );

      const reservationsData = await axios.get(
        // "http://localhost:5000/api/reservations/user/me",
        "http://localhost:8000/api/reservations/user/profile",
        {
          headers: {
            Authorization: `Bearer ${userState.token}`,
          },
        }
      );
      const user = await userData.json();
      const reservations = await reservationsData.json();

      // Update user state with user data and reservations
      setUserState((prevState) => ({ ...prevState, user, reservations }));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <UserContext.Provider value={{ ...userState, setToken, makeReservation }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to access the user context value
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export default UserProvider;
