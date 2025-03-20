import React from 'react'
import { motion } from 'framer-motion';
const References = ({analysis}) => {
  console.log('analysis', analysis)
    return (
        <div className="card sources-section">
          <h2>Primary Sources & References</h2>
          <div className="source-list">
            {analysis.timestamps.map((timestamp) =>
              timestamp.validation.references.length > 0 ? (
                timestamp.validation.references.map((reference, index) => (
                  <motion.div className="source-row"
                    key={reference._id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="source-info">
                      <div className="source-name">{reference.title}</div>
                      <div className="source-meta">
                        <a href={reference.url} target="_blank" rel="noopener noreferrer">
                          {reference.url}
                        </a>
                      </div>
                    </div>
                    <div className="source-rating">
                      {Array.from({ length: reference.credibilityScore/2 }).map((_, index) => (
                        <motion.span
                        key={index}
                        className="rating-star"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        >★</motion.span>
                      ))}
                    </div>
                  </motion.div>
                ))
              ) : null
            )}
          </div>
        </div>
    );
}
export default References