import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "emailjs-com"; // Import emailjs

import "./Section.css";

const Section6 = ({}) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.5 });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z7fje4r",
        "template_s74sa1f",
        e.target,
        "NTMlGJTurxUJfltYd"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <motion.div
      className="container my-md-5"
      id="section6"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="row">
        <motion.div className="col-md-6 ps-3" variants={itemVariants}>
          <h4 className="mt-md-5 mt-4 fw-bolder text-accent">ASK A QUERY</h4>
          <h2 className="font-weight-bold fw-bolder fs-1">
            Need an Assistance? Please Feel Free to Contact Us
          </h2>
          <hr className="blue-lines w-25" />
          <div className="row my-2">
            <div className="col-6">
              <div className="d-flex justify-content-start align-items-center mb-3">
                <i className="fa fa-reply fa-2x text-accent me-2"></i>
                <span>Reply Within 24 Hours</span>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex justify-content-start align-items-center">
                <i className="fa fa-comment fa-2x text-accent me-2"></i>
                <span>24 Hrs Chat Support</span>
              </div>
            </div>
          </div>
          <p>
            At Wheel Spectra Pro, we take pride in offering unparalleled support
            to our valued customers. Our dedicated support team is always ready
            to assist you with any queries, concerns, or assistance you may
            need. We believe that outstanding customer service is the
            cornerstone of our success.
          </p>
        </motion.div>
        <motion.div
          className="col-md-6 d-flex justify-content-center align-items-center mt-md-4"
          variants={itemVariants}
        >
          <div className="contact-form p-4 mx-3 shadow rounded bg-primarys">
            <form onSubmit={sendEmail}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                  name="from_name" // Ensure these names match your emailjs template fields
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email ID"
                  name="reply_to" // Ensure these names match your emailjs template fields
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  placeholder="Message"
                  rows="4"
                  name="message" // Ensure these names match your emailjs template fields
                ></textarea>
              </div>
              <button type="submit" className="btn bg-accent w-100">
                Send Query
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Section6;
