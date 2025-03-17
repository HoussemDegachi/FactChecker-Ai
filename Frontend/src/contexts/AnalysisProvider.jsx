import React, { Dispatch, SetStateAction, createContext, useContext, useState } from "react"


const initialContext = {
  analysis: null,
  setAnalysis: () => {},
  loadingAnalysis: true,
  setLoadingAnalysis: () => {},
  analysisError: null,
  setAnalysisError: () => {}
}

const AnalysisContext = createContext(initialContext)
export const useAnalysis = () => useContext(AnalysisContext)

export function AnalysisProvider({ children }) {
    const [analysis, setAnalysis] = useState(null)
    const [loadingAnalysis, setLoadingAnalysis] = useState(true)
    const [analysisError, setAnalysisError] = useState(null)

  return (
    <AnalysisContext.Provider value={{analysis, setAnalysis, loadingAnalysis, setLoadingAnalysis, analysisError, setAnalysisError}}>
      {children}
    </AnalysisContext.Provider>
  )
}

export default AnalysisContext