import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useUser } from "../context/UseContext";

const Register = () => {
  const user = useUser();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  // function for handling changes to form inputs
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  // function for handling form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post(
        "http://localhost:8000/api/users/register",
        formData
      );
      console.log(response);

      // set user context
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        user.setToken("token", response.data.token);
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
      alert("Error registering user");
    }
  };

  return (
    <div className="row mt-5">
      <section className="mb-5 d-flex flex-row justify-content-center align-item-center">
        <div
          className="card"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(108,108,108,1) 50%, rgba(0,0,0,1) 100%)",
            borderRadius: "1rem",
            color: "white",
            width: "70%",
          }}
        >
          <div className="card-body p-5">
            <h3 className=" text-center font-weight-bold my-4">Register</h3>
            <form className="mb-4 mx-md-5" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-12 mb-4">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    className="form-control"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 mb-4">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    className="form-control"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 mb-4">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-12 mb-4">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="text-center">
                    {/* <button type="submit" className="btn btn-info btn-md"> */}
                    <button
                      type="submit"
                      // onClick={handleSubmit}
                      className="btn btn-md"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,117,255,1) 50%, rgba(0,0,0,1) 100%)",
                        color: "white",
                        width: "60%",
                      }}
                    >
                      Register
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
