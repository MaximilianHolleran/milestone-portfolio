import { useState } from "react";

import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import ReviewForm from './components/ReviewForm'
import ThemeContext from './components/Context/ThemeContext'; // Import the context

function App() {
  return (

    <ThemeContext.Provider value={{ theme: 'dark' }}> {/* Provide context with value */}
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/reviewForm" element={<ReviewForm/>}/>
      </Routes>
    </Router> 

    <div>
      <div className="img-container">
      <img className="" src="" alt=""/>
      <div className="nav-container">
        <NavBar/>
      </div>
    {/* // consider using Canvas maybe? */}
    </div>

    </div>
    </ThemeContext.Provider>

   
  ) ;
}

export default App;