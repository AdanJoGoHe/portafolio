import React, { useEffect, useState } from 'react';
import './NavBar.css';
import myPhoto from './personal-photo.jpg';

function NavBar() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <nav className={`nav-bar ${loaded ? 'nav-loaded' : ''}`}>
            <img src={myPhoto} alt="Your Name" className="photo" />
            <ul className="nav-links">
                <li className="nav-link-item">
                    <a href="#about" className="nav-link">
                        About
                    </a>
                </li>
                <li className="nav-link-item">
                    <a href="#projects" className="nav-link">
                        Projects
                    </a>
                </li>
                <li className="nav-link-item">
                    <a href="#contact" className="nav-link">
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
