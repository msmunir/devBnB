import React, { useState } from "react";
import { useUser } from "./../context/UseContext";

const Support = () => {
  const user = useUser();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // function to handle the change in the input fields
  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "email") {
      setEmail(value);
    } else {
      setMessage(value);
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
            boxShadow: "0px 0px 20px 0px #000",
            borderRadius: "1rem",
            color: "white",
            width: "70%",
          }}
        >
          <div className="card-body p-5">
            <h3 className=" text-center font-weight-bold my-4">Contact Us</h3>
            <form
              className="mb-4 mx-md-5"
              // onSubmit={handleSubmit}
            >
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
                  <label htmlFor="password">Message</label>
                  <textarea
                    type="text"
                    id="message"
                    className="form-control"
                    value={message}
                    rows={5}
                    onChange={handleChange}
                    // placeholder="Password"
                    // onChange={(e) => setMessage(e.target.value)}
                    // style={{height: "100px"}}
                  ></textarea>
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
                      Send
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

export default Support;
