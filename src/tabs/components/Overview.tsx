
const Overview = ({ analysis }) => {

    return (
      <>
      <div className="card fact-check-summary">
              <div className="tags">
                  <span className="badge">{analysis.generalTopic}</span>
                  {analysis.percentages.falseInformation > 0 && (
                      <span className="badge" style={{ background: "var(--warning)" }}>
                          Critical Misinformation
                      </span>
                  )}
                  <span className="badge" style={{ background: "var(--accent)" }}>
                      Verified Elements
                  </span>
                  {/* <span className="badge" style={{background: "var(--warning)"}}>Critical Misinformation</span> */}
                  {/* <span className="badge" style={{background: "var(--accent)"}}>Verified Elements</span> */}
              </div>
                  
              <div className="tabs">
                 <div className="tab active">Overview</div>
              </div>
              
              <div className="summary-grid">
                      <div className="stat-card">
                          <span className="stat-label">Total Claims Analyzed</span>
                          <span className="stat-value">{analysis.topics.count}</span> 
                      </div>
                      <div className="stat-card">
                          <span className="stat-label">False Information</span>
                          <span className="stat-value">{analysis.percentages.falseInformation}%</span>
                      </div>
                      <div className="stat-card">
                          <span className="stat-label">Misleading Content</span>
                          <span className="stat-value">{analysis.percentages.misleadingInformation}%</span>
                      </div>
                      <div className="stat-card">
                          <span className="stat-label">Verified Facts</span>
                          <span className="stat-value">{analysis.percentages.verifiedInformation}%</span>
                      </div>
              </div> 
                  
              <h2>Content Analysis</h2>
              <p>{analysis.conclusion}</p>
  
      </div>
      </>
    )
  }
  
  export default Overview