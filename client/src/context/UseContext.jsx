import React, { createContext, useContext, useState, useEffect } from "react";
// import axios from "axios";

// Default state
const defaultState = {
  token: null,
  user: null,
  bookings: [],
  setToken: (token) => {},
  makeBooking: (booking) => {},
};

// UserContext
const UserContext = createContext(defaultState);

// UserProvider component to provide the user context to its children
const UserProvider = ({ children }) => {
  // User state
  const [userState, setUserState] = useState(defaultState);

  // Set Token
  const setToken = (token) => {
    setUserState((prevState) => ({ ...prevState, token }));
  };

  // Booking
  const makeBooking = (booking) => {
    setUserState((prevState) => ({
      ...prevState,
      bookings: [...prevState.bookings, booking],
    }));
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token !== null) {
      setUserState((prevState) => ({
        ...prevState,
        token,
      }));
    }
  }, []);

  // Fetch user data and bookings when token changes
  useEffect(() => {
    if (userState.token) {
      fetchUserData();
    }
  }, [userState.token]);

  const fetchUserData = async () => {
    try {
      const userData = await fetch("http://localhost:8000/api/users/profile", {
        headers: {
          Authorization: `Bearer ${userState.token}`, // Add Bearer token here
        },
      });

      const bookingsData = await fetch(
        "http://localhost:8000/api/bookings/user/profile",
        {
          headers: {
            Authorization: `Bearer ${userState.token}`, // Add Bearer token here
          },
        }
      );

      // Simulated JSON parsing
      const user = await userData.json();
      const bookings = await bookingsData.json();

      // Update user state with fetched data
      setUserState((prevState) => ({ ...prevState, user, bookings }));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Provide the user context value to its children components
  return (
    <UserContext.Provider value={{ ...userState, setToken, makeBooking }}>
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
