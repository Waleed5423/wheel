import React from "react";
import { motion, useInView } from "framer-motion";
import "./Section.css"; 

const Section2 = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      className="row m-0"
      id="section2"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={sectionVariants}
      transition={{ duration: 0.8 }}
    >
      <div className="container py-5">
        <div className="row">
          <div className="col-12">
            <div className="container text-center">
              <motion.h2
                className="fw-bolder text-secondarys fs-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                AUTHENTIC & RELIABLE VEHICLE HISTORY REPORT
              </motion.h2>
            </div>
            <div className="container">
              <div className="row justify-content-center mt-md-3 mt-2 mb-3">
                {[
                  "https://th.bing.com/th/id/OIP.MrJ4f6_htAlaiyNvJSb5kgHaEH?rs=1&pid=ImgDetMain",
                  "https://th.bing.com/th/id/R.3f220cfd0d0cabc1a5cc7ce62f449068?rik=ePvAlX5SLcSx0A&riu=http%3a%2f%2fmindyouinfotech.com%2fimages%2fus-flag.webp&ehk=iK3Wc%2bgkwsjF%2bZh4cUSt94YhFTUTSNNJDz6yXVUycKk%3d&risl=&pid=ImgRaw&r=0",
                ].map((src, index) => (
                  <motion.div
                    className="col-3 d-flex justify-content-center"
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{
                      opacity: inView ? 1 : 0,
                      scale: inView ? 1 : 0.9,
                    }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  >
                    <img
                      className="w-100 imgs border border-black border-2"
                      src={src}
                      alt=""
                    />
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="container fs-6 text-md-center py-1 mt-md-4 mt-2">
              <motion.ul
                className="d-md-flex d-none list-style justify-content-center bg-accent py-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 1 : 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <li className="px-5 text-light list-item fw-bold">
                  CRASH HISTORY
                </li>
                <li className="px-5 text-light list-item fw-bold">
                  ISSUE INSPECTIONS
                </li>
                <li className="px-5 text-light list-item fw-bold">
                  OWNERSHIP RECORDS
                </li>
                <li className="px-5 text-light list-item fw-bold">RECALLS</li>
                <li className="px-5 text-light list-item fw-bold">
                  MARKET VALUES
                </li>
              </motion.ul>
              <motion.ul
                className="d-md-none d-block py-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 1 : 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <li className="fw-bold">CRASH HISTORY</li>
                <li className="fw-bold">ISSUE INSPECTIONS</li>
                <li className="fw-bold">OWNERSHIP RECORDS</li>
                <li className="fw-bold">RECALLS</li>
                <li className="fw-bold">MARKET VALUES</li>
              </motion.ul>
            </div>
            <motion.div
              className="mt-2 justify-content-center mx-3 d-md-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <button className="bg-secondarys w-100 py-2 px-4 border-0 text-white text-uppercase">
                Generate Report
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Section2;
