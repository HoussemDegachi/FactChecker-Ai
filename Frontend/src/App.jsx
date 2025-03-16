import {Route, Routes} from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import './styles/style.css'



function App() {

  return (
    <>
    <Routes>
      <Route path='/dashboard/:ytid' element={< Dashboard />} /> 
    </Routes>
    </>
  )
}

export default App
