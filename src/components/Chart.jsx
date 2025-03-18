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
                            height: `${(topic.count /25) * 100}%`,
                            background: `linear-gradient(to top, var(--chart-${index + 1}), var(--chart-5))`
                        }}
                    >
                        <div className="bar-value">{topic.count}</div>
                        <div className="bar-label">{topic.title}</div>
                    </div>
                ))}
                </div> 
            </div>
        );
};
    
export default Chart