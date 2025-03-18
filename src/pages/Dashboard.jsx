import React, { useEffect } from "react";

import Overview from "../components/Overview";
import Chart from "../components/Chart";
import { useAnalysis } from "../contexts/AnalysisProvider";
import axios from "axios";
import { useParams } from "react-router-dom";
import KeySection from "../components/KeySection";
import References from "../components/References";

const Dashboard = () => {
  const {
    analysis,
    setAnalysis,
    loadingAnalysis,
    setLoadingAnalysis,
    analysisError,
    setAnalysisError,
  } = useAnalysis();

  const { ytid } = useParams();
  const api =
    "https://missinformation-detector-b-production.up.railway.app/analysis";

  useEffect(() => {
    axios
      .get(`${api}/${ytid}`)
      .then((res) => {
        setAnalysis(res.data);
      })
      .catch((err) => {
        setAnalysisError(err.response.data.message);
      })
      .finally(() => {
        setLoadingAnalysis(false);
      });
  }, []);

  return (
    <>
      {loadingAnalysis ? (
        <p>loading</p>
      ) : !analysisError ? (
        <>
          <Overview analysis={analysis} />
          <Chart analysis={analysis} />
          <KeySection analysis={analysis} />
          <References analysis={analysis} />
        </>
      ) : (
        <p>Error</p>
      )}
    </>
  );
};

export default Dashboard;
