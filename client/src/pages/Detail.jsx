import React, { useState, useEffect } from "react";
import { useUser } from "../context/UseContext";
import { useNavigate, useParams } from "react-router-dom";
import { usePlaces } from "../context/PlaceContext";
import axios from "axios";
import DatePicker from "react-datepicker";
// import "../styles/details.css";

const Detail = () => {
  const userState = useUser();
  console.log(userState);

  // const { user } = userState;
  // console.log(user);

  //
  const params = useParams();
  // const places = usePlaces();
  // console.log(places);
  // const { detailPlace, getDetailPlace } = places;
  // const place = places.find((place) => place.id === params.id);

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

    const bookingData = {
      place: detailPlace.id,
      checkIn: startDate,
      checkOut: endDate,
    };
    console.log(bookingData);

    try {
      const res = await axios.post(
        "http://localhost:8000/api/bookings",
        bookingData,
        {
          headers: {
            Authorization: `Bearer ${userState.token}`,
          },
        }
      );
      console.log(res);
      navigate("/bookings");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="imgCon row row-cols-1 row-cols-sm-4 row-cols-md-8 row-cols-lg-12 mt-5">
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
      <div className="row row-cols-1 row-cols-sm-4 row-cols-md-8 row-cols-lg-12 mt-5">
        <div className="detailLeft col-sm-4 col-md-8">
          <h1>{detailPlace.title}</h1>
          <p>{detailPlace.description}</p>
        </div>
        <div className="detailRight col-sm-4 col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Booking</h5>
              <div className="form-group">
                <label htmlFor="startDate">Check In</label>
                <DatePicker
                  className="form-control"
                  id="startDate"
                  selected={startDate}
                  onChange={handleStartDate}
                  dateFormat="dd/MM/yyyy"
                  minDate={new Date()}
                  showDisabledMonthNavigation
                />
              </div>
              <div className="form-group">
                <label htmlFor="endDate">Check Out</label>
                <DatePicker
                  className="form-control"
                  id="endDate"
                  selected={endDate}
                  onChange={handleEndDate}
                  dateFormat="dd/MM/yyyy"
                  minDate={startDate}
                  showDisabledMonthNavigation
                />
              </div>
              <button className="btn btn-primary" onClick={handleBooking}>
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
