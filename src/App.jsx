import {Route, Routes} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import './styles/style.css'
import NotFoundPage from './pages/NotFoundPage'
import { AnalysisProvider } from './contexts/AnalysisProvider'

function App() {

  return (
    <AnalysisProvider>
    <Routes>
      <Route path='/analysis/:ytid' element={< Dashboard />} /> 
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
    </AnalysisProvider>
  )
}

export default App
