import { useState } from "react";

import Home from './components/Home'
import NavBar from './components/NavBar'
import ThemeContext from './components/Context/ThemeContext'; // Import the context

function App() {
  return (
    <ThemeContext.Provider value={{ theme: 'dark' }}> {/* Provide context with value */}
      <Home/>
      <NavBar /> {/* Now Navbar can access ThemeContext */}
      {/* Other components */}
    </ThemeContext.Provider>
  );
}

export default App;