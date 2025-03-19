import React from "react";
import { motion } from "framer-motion";
import "../style.css";

const KeySection = ({ analysis }) => {
  const getLabelClass = (label) => {
    switch (label) {
      case "False":
        return "tag-red";
      case "Misleading":
        return "tag-yellow";
      case "Correct":
        return "tag-green";
      default:
        return "";
    }
  };

  const getBorderClass = (label) => {
    switch (label) {
      case "False":
        return "border-red";
      case "Misleading":
        return "border-yellow";
      case "Correct":
        return "border-green";
      default:
        return "";
    }
  };

  return (
    <>
      <h2>Key Misinformation</h2>
      <div className="claims-list">
        {analysis.timestamps.map((item, index) => (
          <motion.div
            className={`claim-item ${getBorderClass(item.label)}`}
            key={item._id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }} 
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="claim-meta">
              <div className="claim-timestamp">{item.timestampInStr}</div>
              <div className="claim-accuracy">
                <span className={`tag ${getLabelClass(item.label)}`}>
                  {item.label}
                </span>
              </div>
            </div>
            <div className="claim-text">{item.claim}</div>
            <div className="claim-correction">
              {item.validation.explanation}
            </div>
            <div className="claim-footer">
              <div className="claim-source">{item.source}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default KeySection;