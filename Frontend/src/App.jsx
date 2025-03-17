import {Route, Routes} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import './styles/style.css'
import NotFoundPage from './pages/NotFoundPage'

function App() {

  return (
    <>
    <Routes>
      <Route path='/analysis/:ytid' element={< Dashboard />} /> 
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
    </>
  )
}

export default App
