import React from "react";
import { motion, useInView } from "framer-motion";
import "./Section.css";

const Section4 = ({}) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.section
      className="container my-5"
      id="section4"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.div className="row">
        <motion.div className="col-md-7 mt-md-3" variants={childVariants}>
          <h4 className="text-accent-light mt-md-5 fw-bolder">ABOUT US</h4>
          <h2 className="font-weight-bold fw-bold">
            Discover the Full Story of Your Vehicle with Wheel Spectra Pro
          </h2>
          <hr className="blue-line fw-bolder" />
          <p>
            WheelSpectraPro provides the Detailed History Report of your U.S.
            and Canadian vehicles. Our reports provide a thorough analysis,
            covering crucial aspects such as Crash History, Issue Inspections,
            Ownership Records, Recalls, Market Values, and detailed
            specifications. From accident history to salvage value, we bring you
            a complete and transparent overview, empowering you with the
            information you need for a confident and informed decision on your
            vehicle’s past and present. Trust WheelSpectraPro for a detailed
            exploration into your vehicle’s journey.
          </p>
          <div className="row">
            <div className="col-6">
              <ul className="list-unstyled">
                <li>
                  <i className="fa fa-check text-accent-light"></i> Crash
                  History
                </li>
                <li>
                  <i className="fa fa-check text-accent-light"></i> Issue
                  Inspections
                </li>
                <li>
                  <i className="fa fa-check text-accent-light"></i>{" "}
                  Specifications
                </li>
                <li>
                  <i className="fa fa-check text-accent-light"></i> Ownership
                  Records
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul className="list-unstyled">
                <li>
                  <i className="fa fa-check text-accent-light"></i> Market
                  Values
                </li>
                <li>
                  <i className="fa fa-check text-accent-light"></i> Salvage
                  Value
                </li>
                <li>
                  <i className="fa fa-check text-accent-light"></i> Theft
                  History
                </li>
              </ul>
            </div>
            <motion.button
              className="bg-accent-light mt-md-5 w-50 py-2 px-4 border-0 text-white text-uppercase ms-2"
              variants={childVariants}
            >
              Contact US
            </motion.button>
          </div>
        </motion.div>
        <motion.div
          className="col-md-5 d-flex justify-content-center align-items-center"
          variants={childVariants}
        >
          <img
            src="https://th.bing.com/th/id/OIP.k8SOJEKv9POU8OL9xLUPjgAAAA?rs=1&pid=ImgDetMain"
            className="img-fluid"
            alt="Business meeting"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Section4;
