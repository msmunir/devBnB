import { useEffect, useState } from "react";
import { useUser } from "./../context/UseContext";
import axios from "axios";
import { Link } from "react-router-dom";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const userState = useUser();

  // Get bookings
  useEffect(() => {
    if (userState.token) {
      axios
        .get("http://localhost:8000/api/bookings/user/profile", {
          headers: {
            Authorization: `Bearer ${userState.token}`,
          },
        })
        .then((res) => {
          console.log("Bookins data", res.data);
          setBookings(res.data);
        })
        .catch((err) => {
          console.log("Something went wrong", err);
        });
    }
  }, [userState.token]);

  // Delete booking
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/api/bookings/${id}`, {
        headers: {
          Authorization: `Bearer ${userState.token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setBookings(bookings.filter((booking) => booking._id !== id));
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // Date format
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };
  // Number of nights
  const calculateDaysDifference = (checkin, checkout) => {
    const totalNights = Math.abs(new Date(checkout) - new Date(checkin));
    return totalNights / (1000 * 60 * 60 * 24);
  };
  // Total price
  const calculateTotalPrice = (checkin, checkout, price) => {
    const totalNights = Math.abs(new Date(checkout) - new Date(checkin));
    return (totalNights / (1000 * 60 * 60 * 24)) * price;
  };

  return (
    <div
      className="card mt-5 mb-3 w-75 mx-auto"
      style={{
        backgroundColor: "var(--background-black-50, rgba(0, 0, 0, 0.50))",
        color: "#fff",
        borderRadius: "10px",
      }}
    >
      {bookings.map((booking, index) => (
        <div key={index} className="row g-0 mb-3">
          {booking.place && ( // Add a conditional check for booking.place
            <>
              <div className="col-md-4">
                <img
                  src={booking.place.imageUrl}
                  className="img-fluid rounded-start"
                  alt={booking.place.title}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Booking date: {formatDate(booking.checkin)} -{" "}
                    {formatDate(booking.checkout)}
                    <br />
                    Number of nights:{" "}
                    {calculateDaysDifference(booking.checkin, booking.checkout)}
                    <br />
                    Price per night: {booking.place.price} kr
                    <hr />
                    Total Price:{" "}
                    {calculateTotalPrice(
                      booking.checkin,
                      booking.checkout,
                      booking.place.price
                    )}{" "}
                    kr
                  </p>
                  <div className="button d-flex gap-2">
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => handleDelete(booking._id)}
                    >
                      Delete
                    </button>
                    <button type="submit" className="btn btn-success">
                      <Link
                        to="/payment"
                        style={{ textDecoration: "none", color: "#fff" }}
                      >
                        Continue
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Bookings;
