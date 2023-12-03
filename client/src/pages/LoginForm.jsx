import React, { useState } from "react";
import { useUser } from "../context/UseContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
  const user = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // function for handling changes to form inputs
  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "email") {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };

  // function for handling form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/users/login",
        {
          email,
          password,
        }
      );
      console.log("Responce from api ", response.data);

      if (response.status === 200) console.log("Login successfull");

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        user.setToken("token", response.data.token);
        navigate("/");
        user.setToken(response.data.token);
      } else {
        alert("Error logging in user");
        console.log("Response from api ", response, email, password);
      }
    } catch (err) {
      console.log(err);
      alert("Error, logging in user");
    }
  };

  return (
    // <div className="my-5 dark-grey-text " style={{ background: "none", borderRadius: "1rem", width: "70%" }}>
    <div className="row mt-5">
      <section className="mb-5 d-flex flex-row justify-content-center align-item-center">
        <div
          className="card my-5"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(108,108,108,1) 50%, rgba(0,0,0,1) 100%)",
            boxShadow: "0px 0px 20px 0px #000",
            borderRadius: "1rem",
            color: "white",
            width: "70%",
          }}
        >
          <div className="card-body p-5">
            <h3 className=" text-center font-weight-bold my-4">Login</h3>
            <form className="mb-4 mx-md-5" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-12 mb-4">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    value={email}
                    onChange={handleChange}
                    // placeholder="Email"
                    // onChange={(e) => setEmail(e.target.value)}
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
                    value={password}
                    onChange={handleChange}
                    // placeholder="Password"
                    // onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="text-center">
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
                      Login
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

export default LoginForm;
