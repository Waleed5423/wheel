import React from "react";
import { motion, useInView } from "framer-motion";
import img2 from "../media/b.png";
import "./Section.css";

const Section5 = ({}) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <>
      <motion.section
        className="container my-md-5"
        id="section5"
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div className="row justify-content-center">
          <motion.div className="col-lg-8 text-center" variants={itemVariants}>
            <h4 className="text-accent mt-md-5 fw-bolder">WHY CHOOSE US</h4>
            <h2 className="fw-bolder">
              Get your vehicle's most authentic, reliable & premium report from
              Wheel Spectra Pro.
            </h2>
            <hr className="blue-line mx-auto w-25 text-accent" />
          </motion.div>
        </motion.div>
        <div className="container">
          <motion.div className="row mt-3">
            <motion.div
              className="col-md-4 mt-md-5 pt-md-5"
              variants={itemVariants}
            >
              <div className="row">
                <div className="col-md-12 mb-md-4">
                  <i className="fa fa-check-square text-accent fa-2x me-3"></i>
                  <div className="d-flex align-items-start">
                    <div>
                      <h5>Additional Information</h5>
                      <p>
                        Sales History Manufacturer Information Awards &
                        Accolades NHTSA Recalls Location History Performance
                        Safety & Security.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 mb-md-4">
                  <i className="fa fa-check-square text-accent fa-2x me-3"></i>
                  <div className="d-flex align-items-start">
                    <div>
                      <h5>Automobile Specs</h5>
                      <p>
                        Engine Type Transmission Type Standard Specifications
                        Optional Specifications Type Standard Generic Equipment
                        Type.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="col-md-4 mb-md-0 mb-4"
              variants={itemVariants}
            >
              <img className="w-100" src={img2} alt="Sample Report" />
            </motion.div>
            <motion.div
              className="col-md-4 mt-md-5 pt-md-5"
              variants={itemVariants}
            >
              <div className="row">
                <div className="col-md-12 mb-md-4">
                  <i className="fa fa-check-square text-accent fa-2x me-3"></i>
                  <div className="d-flex align-items-start">
                    <div>
                      <h5>Problems Check</h5>
                      <p>
                        Junk and Salvage Total Loss Recalls/Defects Flood Damage
                        Theft and Vandalism Fire Damage Hail Damage Accidents.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 mb-md-4">
                  <i className="fa fa-check-square text-accent fa-2x me-3"></i>
                  <div className="d-flex align-items-start">
                    <div>
                      <h5>Title Records & Pricing</h5>
                      <p>
                        Mileage Odometer Records Sales History Title Brand
                        (Problem Check) Title Issues, Trade-In Retail Private
                        Party Residuals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Section5;
