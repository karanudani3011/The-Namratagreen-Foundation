import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);

    const closeMenu = () => setIsOpen(false);

    const isActive = (path) => location.pathname === path ? 'active' : '';

    return (
        <nav className="navbar">
            <div className="navContainer">
                <Link to="/" className="logo" onClick={closeMenu}>
                    <img src={require('../assets/logo.jpg')} alt="Namrta Green Logo" style={{ height: '80px', width: '80px', objectFit: 'contain', marginRight: '10px' }} />
                    <span style={{ fontSize: '1.2rem', lineHeight: '1.2' }}> NamrtaGreen<br />Organization Inc</span>
                </Link>

                <div className="mobileToggle" onClick={toggleMenu}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </div>

                <div className={`navLinks ${isOpen ? 'open' : ''}`}>
                    <Link to="/" className={`navLink ${isActive('/')}`} onClick={closeMenu}>Home</Link>
                    <Link to="/about" className={`navLink ${isActive('/about')}`} onClick={closeMenu}>About Us</Link>

                    <div className="dropdown">
                        <span className={`navLink ${isActive('/our-work')}`} style={{ cursor: 'pointer' }}>Our Work ▾</span>
                        <div className="dropdown-content">
                            <Link to="/our-work" onClick={closeMenu}>All Projects</Link>
                            <Link to="/our-work?location=India" onClick={closeMenu}>India</Link>
                            <Link to="/our-work?location=USA" onClick={closeMenu}>USA</Link>
                        </div>
                    </div>

                    <Link to="/contact" className={`navLink ${isActive('/contact')}`} onClick={closeMenu}>Contact Us</Link>
                    <a href='https://buymeacoffee.com/namrtagreen' className="btn btn-primary" >
                            Donate Now
                        </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
