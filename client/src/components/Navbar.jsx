
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBookAtlas } from "react-icons/fa6";

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    // Toggle menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Handle scroll for sticky navbar
    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);

        return () => {  
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Navigation items
    const navItems = [
        { link: "Home", path: "/" },
        { link: "Shop", path: "/shop" },
        { link: "Exchange Your Book", path: "/admin/dashboard" },
       {link:"Login",path:"/login"},
        { link: "About", path: "/about" },
        { link: "Banner", path: "/banner" },
        {link:"Signup",path:"/signup"}
    ];

    return (
        <header>
            {/* <nav className="navbar">
                <div>
                    <Link to="/" className='text-2xl font-bold text-blue-700 flex items-center gap-2'>
                        <FaBook className='inline-block' /> Book
                    </Link> 
                </div>
                <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
                    {navItems.map((item, index) => (
                        <Link key={index} to={item.path} className="nav-item">
                            {item.link}
                        </Link>
                    ))}
                </div>
                <button onClick={toggleMenu} className="menu-toggle">
                    {isMenuOpen ? 'Close' : 'Menu'}
                </button>
            </nav> */}
            <nav >
                <div >
                    <Link to="/" className='text-2xl font-bold text-blue-700 flex items-center gap-2'>
                    <FaBookAtlas /> Book
                    </Link> 
                    
                  <ul className='flex'>
                    {navItems.map((item, index) => (
                      <li key={index}>
                        <Link to={item.path} >{item.link}</Link>
                      </li>
                    ))}
                  </ul>
                  <div>
                    <h2> BOOK EXCHANGE PLATFORM</h2>
                  </div>
                </div>
                
                
               
            </nav>
            
        </header>
    );
};

export default Navbar;

