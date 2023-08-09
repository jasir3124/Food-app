import { Link, useLocation } from 'react-router-dom'
import React, { useState } from 'react';
import SideBar from './sideBar.js'
import { faHome, faList, faCog } from '@fortawesome/free-solid-svg-icons'

export default function NavBar(){
    let location = useLocation()
    const [showSidebar, setShowSidebar] = useState(false)
    const links = [
        {
            name: 'Home',
            path: '/',
            icon: faHome
        },
        {
            name: 'Recipes',
            path: '/recipes',
            icon: faList,
        },
        {
            name: 'Settings',
            path: '/settings',
            icon: faCog,
        },
        
    ]

    function closeSidebar(){
        setShowSidebar(false)
    }

    return (
        <>
            <div className="navBar container">
                <Link to="/" className="logo">F<span>oo</span>diesHub</Link>
                <div className="navLinks">
                {links.map(link => (
                    <Link className={location.pathname === link.path ? 'active' : ''} to={link.path} key={link.name}>{link.name}</Link>
                ))}
                </div>
                <div onClick={() => setShowSidebar(!showSidebar)} className={showSidebar ? 'sidebarButton active' : 'sidebarButton'}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
            { showSidebar && <SideBar close={closeSidebar} links={links}/> }
        </>
        
    )
}