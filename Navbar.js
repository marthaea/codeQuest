import React from 'react'
import { Link } from 'react-router-dom'; // For navigation links
import logo from './mylogo.jpg';
import './Navbar.css'; // importing my custom CSS file


function Navbar() {
    return (
        <nav className="navbar">
            <img src={logo} alt="cworks logo" className='navbar-logo-image' />
            <h1
className='navbar-logo'>codeQuest</h1>
            <ul className='navbar-links'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/IdeaBoard">IdeaBoard</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/collaborate">Collaborate</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/settings">Settings</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    );
}
export default Navbar

                