import React from "react";
import "./DarkMode.css"; 
import { useDarkMode, useDarkModeToggle } from "../Context/DarkModeContext"; 

const DarkMode = () => {
    const toggleDarkMode = useDarkModeToggle();
    const isDarkMode = useDarkMode(); 

    return (
        <div className="dark_mode_wrapper">
            <span className="mode_label">{isDarkMode ? 'Dark Mode' : 'Light Mode'}</span>
            <div className={`toggle ${isDarkMode ? "active" : ""}`} onClick={toggleDarkMode}>
                <div className="toggle-circle"></div>
            </div>
        </div>
    );
};

export default DarkMode;