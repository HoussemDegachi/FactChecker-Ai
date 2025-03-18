import React from 'react'

const References = ({analysis}) => {
    return (
        <div className="card sources-section">
          <h2>Primary Sources & References</h2>
          <div className="source-list">
            {analysis.timestamps.map((timestamp) =>
              timestamp.validation.references.length > 0 ? (
                timestamp.validation.references.map((reference) => (
                  <div className="source-row" key={reference._id}>
                    {/* <div className="source-icon">N</div> */}
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
                        <span key={index} className="rating-star">★</span>
                      ))}
                    </div>
                  </div>
                ))
              ) : null
            )}
          </div>
        </div>
    );
}

export default References