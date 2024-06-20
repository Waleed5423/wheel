import React, { useState, useEffect } from "react";
import "./Section.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Section1 = () => {
  const images = [
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1883&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [images.length]);

  const imageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <div
      className="section1-container"
      id="section1"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <div className="text-overlay m-0 d-md-block d-none">
        <motion.h2
          className="px-md-4 pt-2 fs-2 font-monospace text-uppercase text-light fw-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Make The Smart Choice With An Instant Vehicle History Report
        </motion.h2>
        <motion.p
          className="px-md-5 fs-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Swift access to vital details for confident decision-making. Uncover
          accidents, title issues, and ownership records.
        </motion.p>
        <Link to="/Report">
          <motion.button
            className="bg-secondarys mt-md-2 py-2 px-4 border-0 text-white text-uppercase"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Generate Report{" "}
          </motion.button>
        </Link>
      </div>
      <div className="text-overlay2 py-5 px-3 m-0 d-md-none">
        <motion.h2
          className="fs-2 pt-5 font-monospace text-uppercase text-accent-light fw-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Make The Smart Choice With An Instant Vehicle History Report
        </motion.h2>
        <motion.p
          className="px-md-5 pt-1 fs-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Swift access to vital details for confident decision-making. Uncover
          accidents, title issues, and ownership records.
        </motion.p>
        <motion.button
          className="bg-secondarys mt-md-2 py-2 px-4 border-0 text-white text-uppercase"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Generate Report
        </motion.button>
      </div>
    </div>
  );
};

export default Section1;
