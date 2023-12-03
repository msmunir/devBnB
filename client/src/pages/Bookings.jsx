import { useEffect, useState } from "react";
import { useUser } from "./../context/UseContext";
import axios from "axios";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  // const [activeModal, setActiveModal] = useState(null);
  const userState = useUser();

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

  // Date format
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  // Calculate total price
  const calculateTotalPrice = (checkin, checkout, pricePerNight) => {
    const totalNights = Math.abs(new Date(checkout) - new Date(checkin));
    return totalNights * pricePerNight;
  };

  // const handleContinueClick = () => {
  //   setActiveModal("payment");
  // };

  // const handlePay = () => {
  //   setActiveModal("confirmation");
  // };

  // const handleCloseModal = () => {
  //   setActiveModal(null);
  // };

  // loading data from server
  if (!bookings) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="card mt-5 mb-3 w-75 mx-auto"
      style={{
        backgroundColor: "var(--background-black-50, rgba(0, 0, 0, 0.50))",
        color: "#fff",
        borderRadius: "10px",
        // maxWidth: "540px",
      }}
    >
      <div className="card-header">
        Bookings
        {bookings.map((booking, index) => (
          <>
            <div
              className="row g-0 mb-3"
              style={{ border: "1px solid hotpink" }}
            >
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
                    {/* Number of nights: {booking.totalNights()} */}
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
                    {/* €{" "}
                    {booking.totalPrice(booking.checkout - booking.checkin) *
                      booking.place.pricePerNight} */}
                  </p>
                  <div className="button d-flex gap-2">
                    <button
                      type="button"
                      className="btn btn-danger"
                      // onClick={handleDelete}
                    >
                      Delete
                    </button>
                    <button type="button" className="btn btn-success">
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Bookings;

// Delete booking
// const handleDelete = (id) => {
//   fetch(`http://localhost:8000/api/bookings/${id}`, {
//     method: "DELETE",
//     headers: {
//       Authorization: `Bearer ${userState.token}`,
//     },
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       setBookings(bookings.filter((booking) => booking._id !== id));
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
