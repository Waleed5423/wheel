import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Add smooth scrolling behavior
    });
  };

  return (
    <>
      <footer class="bg-dark text-white text-center text-lg-start mt-4">
        <div class="container p-4">
          <div class="row py-4">
            <div class="col-lg-7 col-md-12 mb-4 mb-md-0 px-md-5">
              <h2 class="text-uppercase fw-bold text-accent">
                Wheel Spectra Pro
              </h2>
              <p>
                Wheel Spectra Pro Report meticulously gathers information from
                reliable automobile sources, delivering our customers solutions
                founded on robust data. Our toolset is meticulously crafted to
                empower both individual car buyers and businesses, providing
                comprehensive vehicle insights and complete histories within a
                single report.
              </p>
            </div>
            <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase  text-accent">Support</h5>
              <ul class="list-unstyled my-3 text-decoration-none">
                <li>
                  <Link
                    className="text-decoration-none text-white"
                    to="/Privacy-Policy"
                    onClick={scrollToTop} // Scroll to top when Privacy Policy is clicked
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-decoration-none text-white"
                    to="/Term-of-Services"
                    onClick={scrollToTop} // Scroll to top when Terms of Service is clicked
                  >
                    Term of Services
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-decoration-none text-white"
                    to="/Refund-Policy"
                    onClick={scrollToTop} // Scroll to top when Refund Policy is clicked
                  >
                    Refund Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase mb-0  text-accent">Get In Touch</h5>
              <ul class="list-unstyled my-3">
                <li>Wheelspectrapro@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="text-center p-3 bg-background"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2);" }}
        >
          © 2024 Copyright: WheelSpectraPro
        </div>
      </footer>
    </>
  );
};

export default Footer;
