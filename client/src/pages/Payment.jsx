import { Link, useNavigate } from "react-router-dom";

const Payment = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const navigate = useNavigate();
  // Solution 1
  // const handlePayment = () => {
  //   const payment = window.confirm("Are you sure you want to continue?");
  //   if (payment) {
  //     navigate("/confirmation");
  //   }
  // };

  // Solution 2
  const handlePayment = () => {
    navigate("/confirmation");
  };

  return (
    <div className="container">
      <div className="card-header">
        <div
          className="card mt-5 w-50 mx-auto row col-sm-4 col-md-8 col-lg-12 g-0 mb-3"
          style={{
            borderRadius: "10px",
            boxShadow: "0px 0px 20px 0px #000",
            color: "#fff",
            background:
              "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(108,108,108,1) 50%, rgba(0,0,0,1) 100%)",
          }}
        >
          {/* Payment Section */}
          <div className="card-body p-5">
            <h3 className=" text-center font-weight-bold my-5">
              Payment Options
            </h3>
            <form className="mb-4 mx-md-5" onSubmit={handleSubmit}>
              {/* First row inputs  */}
              <div className="row">
                <div className="col-md-6 mb-4">
                  <label htmlFor="cardName">Name on Card</label>
                  <input
                    type="text"
                    id="cardName"
                    className="form-control"
                    // value={formData.cardName}
                    // onChange={handleChange}
                  />
                  <small>Full name as displayed on card</small>
                </div>
                <div className="col-md-6 mb-4">
                  <label htmlFor="cardNumber">Card Number</label>
                  <input
                    type="text"
                    id="cardNumber"
                    className="form-control"
                    // value={formData.cardNumber}
                    // onChange={handleChange}
                  />
                </div>
              </div>
              {/* Second row inputs  */}
              <div className="row ">
                <div className="col-md-3 mb-4">
                  <label htmlFor="cardExpiration">Expiration</label>
                  <input
                    type="text"
                    id="cardExpiration"
                    className="form-control"
                    // value={formData.cardExpiration}
                    // onChange={handleChange}
                  />
                </div>
                <div className="col-md-3 mb-4">
                  <label htmlFor="cardCVV">CVV</label>
                  <input
                    type="text"
                    id="cardCVV"
                    className="form-control"
                    // value={formData.cardCVV}
                    // onChange={handleChange}
                  />
                </div>
              </div>
              {/* Third row inputs  */}
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      //checked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault1"
                    >
                      Credit Card
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      //checked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault1"
                    >
                      Debit Card
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      // checked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault1"
                    >
                      Paypal
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      // checked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault1"
                    >
                      Swish
                    </label>
                  </div>
                </div>
              </div>
              {/* Fourth row inputs button */}
              <div className="row mt-5">
                <div className="col-md-12">
                  <div className="text-center">
                    {/* <button type="submit" className="btn btn-info btn-md"> */}
                    <button
                      type="submit"
                      // onClick={handleSubmit}
                      className="btn btn-md"
                      onClick={handlePayment}
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,117,255,1) 50%, rgba(0,0,0,1) 100%)",
                        color: "white",
                        width: "45%",
                      }}
                    >
                      Pay
                      {/* Solution 3 */}
                      {/* <Link
                        to="/confirmation"
                        style={{ textDecoration: "none", color: "#fff" }}
                      >
                        Pay
                      </Link> */}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
