import { useState } from "react";

import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'
import Home from './Home/Home'
import NavBar from './components/NavBar/NavBar'
import Gallery from './components/Projects/Gallery'
import Contact from './components/Contact/Contact'
import ReviewForm from './components/ReviewForm/ReviewForm'
import ThemeContext from './components/Context/ThemeContext'; // Import the context
import { DarkModeProvider } from "./components/Context/DarkModeContext";

function App() {
  return (
    <DarkModeProvider>
  
    <ThemeContext.Provider value={{ theme: 'dark' }}> {/* Provide context with value */}
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/reviewForm" element={<ReviewForm/>}/>
      </Routes>
    </Router> 
    </ThemeContext.Provider>
    </DarkModeProvider>
  ) ;
}

export default App;