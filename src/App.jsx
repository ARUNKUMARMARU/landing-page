import React from 'react'
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom'
import Landing from './component/Landing'

function App() {
  return (
    <div>
      <Router>

        <div>
          <Routes>
            <Route path='/' element={<Landing/>}/>
          </Routes>
        </div>

      </Router>
    </div>
  )
}

export default App