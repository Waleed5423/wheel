import React, { useState } from "react";
import axios from "axios";
import "./Section.css";
import Navbar from "./Navbar";

const Report = () => {
  const [formData, setFormData] = useState({
    vin: "",
    name: "",
    email: "",
    phoneNumber: "",
  });

  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "vin" && value.length !== 17) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        vin: "VIN must be exactly 17 characters and alphanumeric.",
      }));
    } else if (name === "phoneNumber" && value.length !== 11) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phoneNumber: "Phone number must be exactly 11 digits.",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: undefined,
      }));
    }
  };

  const validateForm = () => {
    const errors = {};
    const vinRegex = /^[A-HJ-NPR-Z0-9]{17}$/;

    if (!vinRegex.test(formData.vin)) {
      errors.vin = "VIN must be exactly 17 characters and alphanumeric.";
    }

    if (!formData.name.trim()) {
      errors.name = "Name is required.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      errors.email = "Invalid email format.";
    }

    const phoneRegex = /^\d{11}$/;
    if (!phoneRegex.test(formData.phoneNumber)) {
      errors.phoneNumber = "Phone number must be exactly 11 digits.";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        const response = await axios.post(
          process.env.REACT_APP_API_URL,
          formData
        );
        console.log("Report submitted successfully:", response.data);
        setErrors({});
        setShowModal(true);
      } catch (error) {
        console.error("There was an error submitting the form:", error);
      }
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Navbar />
      <div className="text-center bg-accent shadow shadow-3">
        <h1 className="display-1 py-md-5 py-4 fw-bolder text-white shadow">
          Generate Report
        </h1>
      </div>
      <div className="container px-md-5 px-3 py-md-5 py-3">
        <form onSubmit={handleSubmit} className="needs-validation px-md-5">
          <div className="mb-3">
            <label htmlFor="vin" className="form-label">
              VIN Number:
            </label>
            <input
              type="text"
              id="vin"
              name="vin"
              className={`form-control border border-1 border-dark ${
                errors.vin ? "is-invalid" : ""
              }`}
              value={formData.vin}
              onChange={handleChange}
              required
            />
            {errors.vin && <div className="invalid-feedback">{errors.vin}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={`form-control border border-1 border-dark ${
                errors.name ? "is-invalid" : ""
              }`}
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.name}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`form-control border border-1 border-dark ${
                errors.email ? "is-invalid" : ""
              }`}
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">
              Phone Number:
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              className={`form-control border border-1 border-dark ${
                errors.phoneNumber ? "is-invalid" : ""
              }`}
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
            {errors.phoneNumber && (
              <div className="invalid-feedback">{errors.phoneNumber}</div>
            )}
          </div>

          <button type="submit" className="btn btn-primary w-25">
            Submit
          </button>
        </form>

        {showModal && (
          <div className="modal d-block" tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Payment Details</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={handleCloseModal}
                  ></button>
                </div>
                <div className="modal-body">
                  <p>
                    Total Amount to Pay:{" "}
                    <strong className="fs-5 font-monospace">$36.69</strong>
                  </p>
                  <p>
                    Please proceed with the payment using the following
                    PayPal.me link:
                    <br />
                    <a
                      href="https://www.paypal.me/graphicdesigner765/36.69"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="btn btn-primary mt-3 w-50">
                        Pay with PayPal
                      </button>
                    </a>
                    <p className="mt-4">
                      After payment, please allow 24-48 hours for the payment to
                      be processed.
                    </p>
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleCloseModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Report;
