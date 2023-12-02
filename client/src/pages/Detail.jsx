import { useState, useEffect } from "react";
import { useUser } from "../context/UseContext";
import { useNavigate, useParams } from "react-router-dom";
import { usePlaces } from "../context/PlaceContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  FaUserCircle,
  FaBed,
  FaDoorOpen,
  FaWifi,
  FaCar,
  FaUmbrellaBeach,
  FaPizzaSlice,
  FaBath,
} from "react-icons/fa";
import { GiTennisCourt } from "react-icons/gi";
import { FaBagShopping, FaLocationDot, FaMugSaucer } from "react-icons/fa6";

const Detail = () => {
  const userState = useUser();
  console.log(userState);
  const params = useParams();
  const { detailPlace, getDetailPlace } = usePlaces();

  // date picker
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (params.id) {
      getDetailPlace(params.id);
    }
  }, [params, userState, navigate]);

  // loading data from server
  if (!detailPlace) {
    return <div>Loading...</div>;
  }

  // date picker
  const handleStartDate = (date) => {
    setStartDate(date);
  };
  const handleEndDate = (date) => {
    setEndDate(date);
  };

  // booking
  const handleBooking = async () => {
    if (!userState.token) return navigate("/login");

    if (!startDate || !endDate) return alert("Please select date");

    if (startDate && endDate) {
      console.log("Place", detailPlace);

      const bookingData = {
        place: detailPlace._id,
        checkin: startDate,
        checkout: endDate,
      };

      try {
        const response = await fetch("http://localhost:8000/api/bookings", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userState.token}`,
          },
          body: JSON.stringify(bookingData),
        });
        if (response.ok) {
          console.log("booking successful!");

          navigate("/bookings");
        } else {
          console.error("booking failed");
          console.log(response);
        }
      } catch (error) {
        console.error("booking failed");
        console.log(error);
      }
    } else {
      console.log("Please select date");
      alert("Please select date");
    }
  };

  return (
    <>
      <div
        className="imgCon row row-cols-1 row-cols-sm-4 row-cols-md-8 row-cols-lg-12 mt-5
        d-flex flex-row justify-content-center align-items-center"
      >
        <div className="imgLeft col-sm-4 col-md-7">
          <img
            className="img-fluid"
            src={detailPlace.imageUrl}
            alt={detailPlace.title}
            style={{
              height: "380px",
              width: "100%",
              // objectFit: "cover",
              // objectFit: "contain",
              boxSizing: "border-box",
              borderRadius: "10px",
              padding: "5px 0px",
              // marginLeft: "10px",
            }}
          />
        </div>
        <div
          className="imgRight col-sm-4 col-md-5 "
          // style={{ padding: "15px 5px" }}
        >
          {detailPlace?.images?.map((image) => (
            <img
              key={image}
              className="img-fluid"
              src={image}
              alt={detailPlace.title}
              style={{
                height: "190px" /* Reduced height to account for the padding */,
                width:
                  "calc(50% - 10px)" /* Adjusted width to include the gap */,
                objectFit: "cover",
                padding: "5px" /* Added padding to create the gap */,
                boxSizing:
                  "border-box" /* Ensure padding is included in the width */,
                borderRadius: "10px",
              }}
            />
          ))}
        </div>
      </div>

      {/* Desctiption */}
      <div className="row row-cols-1 row-cols-sm-4 row-cols-md-8 row-cols-lg-12 mt-5">
        <div
          className="detailLeft col-sm-4 col-md-8"
          style={{
            color: "#fff",
            backgroundColor: "#051d47d3",
            padding: "15px",
            borderRadius: "10px",
          }}
        >
          <h1>{detailPlace.title}</h1>
          <p>2 Quests - 1 Bedroom - 1 Bed - 2 Bathrooms</p>
          <hr />
          <p>
            <FaUserCircle /> {detailPlace.host} is your host
            <br />
            <span style={{ marginLeft: "1.4rem", fontSize: ".8rem" }}>
              Super host.
            </span>
          </p>
          <hr />
          <p>
            <FaDoorOpen /> Self Chek-in
            <br />
            <span style={{ marginLeft: "1.4rem", fontSize: ".8rem" }}>
              You can check in with the doorman.
            </span>
            <br />
            <FaUserCircle /> {detailPlace.host} is your host
            <br />
            <span style={{ marginLeft: "1.4rem", fontSize: ".8rem" }}>
              Super hosts are experienced, highly rated hosts who are committed
              to providing great stays for guests.
            </span>
            <br />
            <FaLocationDot /> {detailPlace.location}
            <br />
            <span style={{ marginLeft: "1.4rem", fontSize: ".8rem" }}>
              Exact location information is provided after a booking is
              confirmed.
            </span>
          </p>
          <hr />
          <p>
            <h6> Description</h6>
            {detailPlace.description}
            <hr />
          </p>
          <p>
            <h6>Where you will sleep</h6>
          </p>
          <p>1 bedroom</p>
          <p>
            <FaBed /> Queen bed
          </p>
          <hr />
          <h6>What this place offers</h6>
          <p className="d-flex flex-row">
            <p>
              <FaWifi /> Wifi <br />
              <FaBagShopping /> Lugg age dropoff allowed <br />
              <FaCar /> Free parking on premises <br />
              <FaUmbrellaBeach /> Pool <br />
            </p>
            <p className="mx-5">
              <FaMugSaucer /> Coffe maker <br />
              <FaPizzaSlice /> Food delivery service <br />
              <FaBath /> Bathtub <br />
              <GiTennisCourt /> Tennis court <br />
            </p>
          </p>
          <hr />
        </div>
        <div className="detailRight col-sm-4 col-md-4 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Booking</h5>
              <div className="form-group">
                <label htmlFor="startDate">Check In</label>
                <br />
                <DatePicker
                  className="form-control "
                  id="startDate"
                  selected={startDate}
                  onChange={handleStartDate}
                  minDate={new Date()}
                  dateFormat="dd/MM/yyyy"
                  showDisabledMonthNavigation
                  // selected={startDate}
                  // onChange={handleStartDate}
                  // selectsStart
                  // startDate={startDate}
                  // endDate={endDate}
                  // className="form-control"
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="endDate">Check Out</label>
                <br />
                <DatePicker
                  className="form-control"
                  id="endDate"
                  selected={endDate}
                  onChange={handleEndDate}
                  minDate={startDate}
                  dateFormat="dd/MM/yyyy"
                  showDisabledMonthNavigation
                  // selected={endDate}
                  // onChange={handleEndDate}
                  // selectsEnd
                  // startDate={startDate}
                  // endDate={endDate}
                  // minDate={startDate}
                  // className="form-control"
                />
              </div>
              <button
                className="btn"
                onClick={handleBooking}
                style={{
                  borderRadius: "5px",
                  color: "#fff",
                  background:
                    "var(--linear-black-green-black, linear-gradient(180deg, #000 0%, #42FF00 52.08%, #000 100%)",
                  // border: "none",
                  padding: "5px",
                  width: "120px",
                }}
              >
                Book now
              </button>
              <br />
              <p>
                <strong>{detailPlace.price} kr</strong>/ night
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
