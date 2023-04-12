import React, { useEffect, useState } from 'react';
import './NavBar.css';
import myPhoto from './personal-photo.jpg';
import { motion } from 'framer-motion';

function NavBar() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <nav className={`nav-bar fixed top-0 left-0 h-full w-64 md:w-80 bg-gray-800 p-6 ${loaded ? 'nav-loaded' : ''}`}>
            <div className="photo-container">
                <motion.img src={myPhoto} alt="Your Name" className="photo mx-auto mb-8 rounded-full w-32 h-32 object-cover" />
            </div>
            <ul className="nav-links flex flex-col gap-4">
                <li className="nav-link-item">
                    <a href="#about" className="nav-link text-gray-300 text-lg font-semibold hover:text-white">
                        About
                    </a>
                </li>
                <li className="nav-link-item">
                    <a href="#projects" className="nav-link text-gray-300 text-lg font-semibold hover:text-white">
                        Projects
                    </a>
                </li>
                <li className="nav-link-item">
                    <a href="#contact" className="nav-link text-gray-300 text-lg font-semibold hover:text-white">
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
