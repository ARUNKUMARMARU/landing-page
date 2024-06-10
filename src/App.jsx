import React from 'react'
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom'
import Landing from './component/Landing'
import Seo from './component/Seo'
import Services from './component/Services'

function App() {
  return (
    <div>
      <Router>

        <div>
          <Routes>
            <Route path='/' element={<Landing/>}/>
            {/* <Route path='/services' element={<Services/>}/> */}
            <Route path='/seo' element={<Seo/>}/>
          </Routes>
        </div>

      </Router>
    </div>
  )
}

export default App