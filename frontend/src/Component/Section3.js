import React from "react";
import { motion, useInView } from "framer-motion";
import "./Section.css";

const Section3 = ({}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      className="bg-secondarys py-2"
      id="section3"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <div className="row m-0 text-center text-light mt-3">
          <motion.div
            className="col-12 col-md-4 mb-3"
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="rectangle bg-primarys shadow sahow-4 d-flex flex-column justify-content-center align-items-center py-4">
              <i
                className="fa fa-database fa-2x mb-2 text-dark fs-1"
                aria-hidden="true"
              ></i>
              <h3 className="p-3">DATA SOURCES</h3>
              <h4 className="font-monospace fs-2">76</h4>
            </div>
          </motion.div>
          <motion.div
            className="col-12 col-md-4 mb-3"
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="rectangle bg-primarys shadow sahow-4 d-flex flex-column justify-content-center align-items-center py-4">
              <i
                className="fa fa-car fa-2x mb-2 text-dark fs-1"
                aria-hidden="true"
              ></i>
              <h3 className="p-3">VIN SEARCHES</h3>
              <h4 className="font-monospace fs-2">30000</h4>
            </div>
          </motion.div>
          <motion.div
            className="col-12 col-md-4 mb-3"
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="rectangle bg-primarys shadow sahow-4 d-flex flex-column justify-content-center align-items-center py-4">
              <i
                className="fa fa-file-alt fa-2x mb-2 text-dark fs-1"
                aria-hidden="true"
              ></i>
              <h3 className="p-3">REPORTS GENERATED</h3>
              <h4 className="font-monospace fs-2">8400</h4>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Section3;
