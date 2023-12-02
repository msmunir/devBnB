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

  // Fetch user data and bookings
  // const fetchUserData = async () => {
  //   try {
  //     const userData = await axios.get(
  //       "http://localhost:8000/api/users/profile",
  //       {
  //         headers: {
  //           Authorization: `Bearer ${userState.token}`,
  //         },
  //       }
  //     );
  //     // console.log("userData", userData);

  //     const user = await userData.json();
  //     console.log("user", user);

  //     const bookingsData = await axios.get(
  //       "http://localhost:8000/api/bookings/user/profile",
  //       {
  //         headers: {
  //           Authorization: `Bearer ${userState.token}`,
  //         },
  //       }
  //     );
  //     const bookings = await bookingsData.json();

  //     // Update user state with user data and bookings
  //     setUserState((prevState) => ({ ...prevState, user, bookings }));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const fetchUserData = async () => {
    try {
      // Simulated API response with Authorization header
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

/* 
import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// Default state
const defaultState = {
  token: null,
  user: null,
  reservations: [],
  setToken: (token) => {},
  // makeReservation: (reservation) => {},
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
  // const makeReservation = (reservation) => {
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
      // const userData = await axios.get("http://localhost:8000/api/users/me", {
      const userData = await axios.get(
        "http://localhost:8000/api/users/profile",
        {
          headers: {
            Authorization: `Bearer ${userState.token}`,
          },
        }
      );

      const reservationsData = await axios.get(
        // "http://localhost:8000/api/reservations/user/me",
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

*/
