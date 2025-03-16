import React, {useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useAnalysisStore from '../store/analysis'

const Overview = () => {
    const {ytid} = useParams()
    console.log('ytid', ytid)
    const { analysis, getAnalysis, isLoading, error } = useAnalysisStore();
    const { percentages, topics, conclusion, generalTopic } = analysis;
console.log('analysis', analysis)

    useEffect(() => {
        if (ytid) {
            getAnalysis(ytid); 
        }
    }, [ytid, getAnalysis]);
    
    if (isLoading) return <p>Loading analysis...</p>;
    if (error) return <p className="error">{error}</p>;
    if (!analysis) return <p>No analysis available.</p>;

  return (
    <>
    <div class="card fact-check-summary">
            <div className="tags">
                <span classNameName="badge">{analysis?.generalTopic}</span>
                {percentages.falseInformation > 0 && (
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
                        {/* {analysis.timestamps.length} */}
                        <span className="stat-value">{topics.count}</span> 
                    </div>
                    <div className="stat-card">
                        <span className="stat-label">False Information</span>
                        <span className="stat-value">{percentages.falseInformation}%</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-label">Misleading Content</span>
                        <span className="stat-value">{percentages.misleadingInformation}%</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-label">Verified Facts</span>
                        <span className="stat-value">{percentages.verifiedInformation}%</span>
                    </div>
            </div> 
                
            <h2>Content Analysis</h2>
            <p>{conclusion}</p>

    </div>
    </>
  )
}

export default Overview