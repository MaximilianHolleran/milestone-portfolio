import React, { createContext, useContext, useState } from 'react';

const DarkModeContext = createContext();
const DarkModeUpdateContext = createContext();

// Custom hook to use the dark mode state
export const useDarkMode = () => useContext(DarkModeContext);

// Custom hook to toggle the dark mode
export const useDarkModeToggle = () => useContext(DarkModeUpdateContext);

export const DarkModeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(prevIsDarkMode => !prevIsDarkMode);
    };

    return (
        <DarkModeContext.Provider value={isDarkMode}>
            <DarkModeUpdateContext.Provider value={toggleDarkMode}>
                {children}
            </DarkModeUpdateContext.Provider>
        </DarkModeContext.Provider>
    );
};
