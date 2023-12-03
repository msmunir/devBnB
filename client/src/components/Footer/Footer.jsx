import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
// import { FaCircle } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer mt-5 mx-5">
      <div className="row footer-top ">
        {/* <hr
          style={{ color: "#8d7a7a55", width: "95%", marginLeft: "1.5rem" }}
        /> */}
        <div className="row col-sm-4 col-md-12" style={{ color: "#fff" }}>
          <div
            className="row col-md-12 text-center mt-5 pt-5"
            style={{ borderTop: "1px solid #8d7a7a55" }}
          >
            <div className="col-sm-6 col-md-4">
              <div className="footer-links">
                <h4 className="text-uppercase">Company</h4>
                <ul className="list-unstyled">
                  <li>
                    <a
                      style={{ textDecoration: "none", color: "#b3b0b0" }}
                      href="#"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      style={{ textDecoration: "none", color: "#b3b0b0" }}
                    >
                      Our Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      style={{ textDecoration: "none", color: "#b3b0b0" }}
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      style={{ textDecoration: "none", color: "#b3b0b0" }}
                    >
                      Affiliate Program
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      style={{ textDecoration: "none", color: "#b3b0b0" }}
                    >
                      Terms & Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="footer-links">
                <h4 className="text-uppercase">Support</h4>
                <ul className="list-unstyled">
                  <li>
                    <a
                      href="#"
                      style={{ textDecoration: "none", color: "#b3b0b0" }}
                    >
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      style={{ textDecoration: "none", color: "#b3b0b0" }}
                    >
                      Help Desk
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      style={{ textDecoration: "none", color: "#b3b0b0" }}
                    >
                      Forums
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      style={{ textDecoration: "none", color: "#b3b0b0" }}
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      style={{ textDecoration: "none", color: "#b3b0b0" }}
                    >
                      Pricing & Plans
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="footer-links">
                <h4 className="text-uppercase">Social Media</h4>
                <ul className="list-unstyled">
                  <li>
                    <a
                      href="#"
                      style={{ textDecoration: "none", color: "#b3b0b0" }}
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      style={{ textDecoration: "none", color: "#b3b0b0" }}
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      style={{ textDecoration: "none", color: "#b3b0b0" }}
                    >
                      Linkedin
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      style={{ textDecoration: "none", color: "#b3b0b0" }}
                    >
                      Google Plus
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      style={{ textDecoration: "none", color: "#b3b0b0" }}
                    >
                      Youtube
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* footer-bottom */}
          <div
            className="row col-md-12 mt-5 pt-4 mb-3"
            style={{ borderTop: "1px solid #8d7a7a55", width: "100%" }}
          >
            <div className="row col-sm-4 col-md-12 text-center">
              <div className="col-sm-6 col-md-4">
                {/* <span
                  style={{
                    position: "absolute",
                    left: "10px",
                    bottom: "1.4rem",
                  }}
                >
                  <FaCircle />
                </span> */}
                <p
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    marginLeft: "20px",
                  }}
                >
                  DevBnB
                </p>
              </div>
              <div className="col-sm-6 col-md-4">
                <p className="footer-company-name" style={{ color: "#8b8989" }}>
                  &copy; 2023 DevBnB Coders Inc.
                </p>
              </div>
              <div className="col-sm-6 col-md-4 mb-3">
                <a href="#">
                  <FaFacebook style={{ margin: "5px" }} />
                </a>
                <a href="#">
                  <FaXTwitter style={{ margin: "5px" }} />
                </a>
                <a href="#">
                  <FaInstagramSquare style={{ margin: "5px" }} />
                </a>
                <a href="#">
                  <FaYoutube style={{ margin: "5px" }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
