import {useState, useContext} from 'react'
import ThemeContext from './Context/ThemeContext'; // Import the context
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'
import Home from './Home'
import Gallery from './Gallery'
import Contact from './Contact'
import ReviewForm from './ReviewForm'

function NavBar (){
    const { theme } = useContext(ThemeContext); // Use context value

    return(
        <div style={{ backgroundColor: theme === 'dark' ? '#333' : '#CCC' }}>
            <Router>
            <nav>
                <ul>
                    <li><Link to="/" className="">Home</Link></li>
                    <li><Link to="/gallery" className="">Gallery</Link></li>
                    <li><Link to="/contact" className="">Contact</Link></li>
                    <li><Link to="reviewForm" className="">Reviews</Link></li>
                </ul>
            </nav>
            </Router>

            <div className="route-dom">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/gallery" element={<Gallery/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/reviewForm" element={<ReviewForm/>}/>
                </Routes>
            
            </div>
        </div>

       
    );
}


export default NavBar