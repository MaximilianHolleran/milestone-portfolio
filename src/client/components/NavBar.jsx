import {useState, useContext} from 'react'
import ThemeContext from './Context/ThemeContext'; // Import the context
import { Link} from 'react-router-dom'


const NavBar = () =>{
    // const theme = useContext(ThemeContext); // Use context value
    // console.log(theme)
    return(
        // <div style={{ backgroundColor: theme === 'dark' ? '#333' : '#CCC' }}>
            <nav className="nav-wrapper">
                <div className="nav-content">
                    <ul className="nav-content-ul">
                        <li><Link to="/" className="menu-item">Home</Link></li>
                        <li><Link to="/gallery" className="menu-item">Gallery</Link></li>
                        <li><Link to="/contact" className="menu-item">Contact</Link></li>
                        <li><Link to="/reviewForm" className="menu-item">Reviews</Link></li>
                    </ul>
                </div>
            </nav>

        // </div>

       
    );
}


export default NavBar