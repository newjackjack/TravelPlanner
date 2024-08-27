import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from './views/Home';
import Results from './views/Results';

import AppContext from "./libs/context";

function App() {
  const [travelPlan, setTravelPlan] = useState(null);

  return (
    <>
      <AppContext.Provider value={{travelPlan, setTravelPlan}}>
        <Routes>
          {/* Home page */}
          <Route path="/" element={<Home />} />
          {/* Route to showOneBook */}
          <Route path="/results" element={<Results />} />
        </Routes>
      </AppContext.Provider>
    </>
  )
}

export default App
