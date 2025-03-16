import React, {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type SetStateAction
} from "react"

type AnalysisProviderProps = {
  children: React.ReactNode
}

type AnalysisContextType = {
  analysis: any
  setAnalysis: Dispatch<SetStateAction<any>>
  loadingAnalysis: boolean
  setLoadingAnalysis: Dispatch<SetStateAction<boolean>>
  available: boolean
  setAvailable: Dispatch<SetStateAction<boolean>>
}

const initialContext = {
  analysis: null,
  setAnalysis: () => {},
  loadingAnalysis: true,
  setLoadingAnalysis: () => {},
  available: true,
  setAvailable: () => {}
}

const AnalysisContext = createContext<AnalysisContextType>(initialContext)
export const useAnalysis = () => useContext(AnalysisContext)

export function AnalysisProvider({ children }: AnalysisProviderProps) {
  const [analysis, setAnalysis] = useState<any>(null)
  const [loadingAnalysis, setLoadingAnalysis] = useState<boolean>(true)
  const [available, setAvailable] = useState<boolean>(true)

  return (
    <AnalysisContext.Provider
      value={{
        analysis,
        setAnalysis,
        loadingAnalysis,
        setLoadingAnalysis,
        available,
        setAvailable
      }}>
      {children}
    </AnalysisContext.Provider>
  )
}
