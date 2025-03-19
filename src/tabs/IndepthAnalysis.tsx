import React, { useEffect, useState } from 'react'
import Chart from './components/Chart';
import KeySection from './components/KeySection';
import Overview from './components/Overview';
import References from './components/References';
import LoadingSquares from '~Component/LoadingSquares';

function IndepthAnalysis() {
  const [data, setData] = useState(null);

  useEffect(() => {
    chrome.storage.local.get('videoAnalysisData', (result) => {
      if (result.videoAnalysisData) {
        setData(result.videoAnalysisData);
      }
    });
  }, []);

  return (
    <>
      {data && (
        <>
        <Overview analysis={data} />
        <Chart analysis={data} />
        <KeySection analysis={data} />
        <References analysis={data} />
        </>
      )}
    </>
  )
}

export default IndepthAnalysis