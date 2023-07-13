import React, { useState } from 'react';
export default function NavBar(){
    const [showSidebar, setShowSidebar] = useState(false)
    return (
        <div className="navBar container">
                <a href="#!" className="logo">F<span>oo</span>diesHub</a>
                <div className="navLinks">
                <a href="#!" className="active">Home</a>
                <a href="#!">Recipes</a>
                <a href="#!">Settings</a>
                </div>
                <div onClick={() => setShowSidebar(!showSidebar)} className={showSidebar ? 'sidebarButton active' : 'sidebarButton'}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
        </div>
    )
}