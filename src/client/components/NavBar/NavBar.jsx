import {useState, useContext} from 'react'
import ThemeContext from '../Context/ThemeContext'; // Import the context
import { Link} from 'react-router-dom'
import './NavBar.css'
import DarkMode from '../DarkMode/DarkMode';
import { useDarkMode } from '../Context/DarkModeContext';



const NavBar = () =>{
    const isDarkMode = useDarkMode();
    // const theme = useContext(ThemeContext); // Use context value
    // console.log(theme)
    return(
        // <div style={{ backgroundColor: theme === 'dark' ? '#333' : '#CCC' }}>
        <nav className={`nav-wrapper ${isDarkMode ? 'dark' : 'light'} ${isDarkMode ? 'white-border' : ''}`}>
                <button class="menu-btn" onClick={()=>{} }>
                    <span class={"material-symbols-outlined"} style={{fontSize: "1.8rem"}}>Menu
                    </span>
                </button>
                <div className="nav-content">
                    <ul className="nav-content-ul">
                        <li><Link to="/" className={`menu-item ${isDarkMode ? 'white-font' : ''}`}>Home</Link></li>
                        <li><Link to="/gallery" className={`menu-item ${isDarkMode ? 'white-font' : ''}`}>Gallery</Link></li>
                        <li><Link to="/contact" className={`menu-item ${isDarkMode ? 'white-font' : ''}`}>Contact</Link></li>
                        <li><Link to="/reviewForm" className={`menu-item ${isDarkMode ? 'white-font' : ''}`}>Reviews</Link></li>
                    </ul>
                </div>
                 <DarkMode/>
            </nav>

        // </div>

       
    );
}


export default NavBar