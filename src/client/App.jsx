import { useState } from "react";
import Navbar from './Navbar'; // Import your Navbar component
import ThemeContext from './ThemeContext'; // Import the context

function App() {
  return (
    <ThemeContext.Provider value={{ theme: 'dark' }}> {/* Provide context with value */}
      <Navbar /> {/* Now Navbar can access ThemeContext */}
      {/* Other components */}
    </ThemeContext.Provider>
  );
}

export default App;