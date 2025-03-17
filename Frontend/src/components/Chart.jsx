const Chart = ({ analysis }) => {

        return (
            <div className="chart-section">
                <h3>Claims by Category</h3>
                <div className="bar-chart">
                {analysis.topics.categories.map((topic, index) => (
                    <div
                        key={topic._id}
                        className="bar"
                        style={{
                            height: `${(topic.count / 100) * 100}%`,
                            background: `linear-gradient(to top, var(--chart-${index + 1}), var(--chart-5))`
                        }}
                    >
                        <div className="bar-value">{topic.count}</div>
                        <div className="bar-label">{topic.title}</div>
                    </div>
                ))}
                </div>
                <div className="bar-chart">
                    <div 
                        className="bar" 
                        style={{ height: "80%", background: "linear-gradient(to top, var(--chart-1), var(--chart-5))" }}
                    >
                        <div className="bar-value">8</div>
                        <div className="bar-label">Temperature</div>
                    </div>
                    <div 
                        className="bar" 
                        style={{ height: "60%", background: "linear-gradient(to top, var(--chart-2), var(--chart-5))" }}
                    >
                        <div className="bar-value">6</div>
                        <div className="bar-label">CO2 Impact</div>
                    </div>
                    <div 
                        className="bar" 
                        style={{ height: "50%", background: "linear-gradient(to top, var(--chart-3), var(--chart-5))" }}
                    >
                        <div className="bar-value">5</div>
                        <div className="bar-label">Renewable</div>
                    </div>
                    <div 
                        className="bar" 
                        style={{ height: "40%", background: "linear-gradient(to top, var(--chart-4), var(--chart-5))" }}
                    >
                        <div className="bar-value">4</div>
                        <div className="bar-label">Policy</div>
                    </div>
                </div>
            </div>
        );
};
    
export default Chart