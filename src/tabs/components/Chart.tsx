import {motion} from 'framer-motion'

const Chart = ({ analysis }) => {
    if (!analysis?.topics?.categories?.length) return <p>No data available</p>;

    const maxCount = Math.max(...analysis.topics.categories.map(topic => topic.count));

    return (
        <div className="chart-section">
            <h3>Claims by Category</h3>
            <div className="bar-chart">
                {analysis.topics.categories.map((topic, index) => {
                    const heightPercentage = (topic.count / maxCount) * 100; 
                    return (
                        <motion.div
                            key={topic._id}
                            className="bar"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }} 
                            transition={{ duration: 1, delay: index * 0.3 }}
                            style={{
                                height: `${heightPercentage}%`, 
                                background: `linear-gradient(to top, var(--chart-${index + 1}), var(--chart-5))`
                            }}
                        >
                            <div className="bar-value">{topic.count}</div>
                            <div className="bar-label">{topic.title}</div>
                        </motion.div>
                    );
                })}
            </div> 
        </div>
    );
};

export default Chart;