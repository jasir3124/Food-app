import React, { useState } from 'react';
import SideBar from './sideBar.js'
import { faHome, faList, faCog } from '@fortawesome/free-solid-svg-icons'

export default function NavBar(){
    const [showSidebar, setShowSidebar] = useState(false)
    const links = [
        {
            name: 'Home',
            path: '/',
            icon: faHome
        },
        {
            name: 'Recipes',
            path: '.Recipes',
            icon: faList
        },
        {
            name: 'Settings',
            path: '/Settings',
            icon: faCog
        }
    ]

    function closeSidebar(){
        setShowSidebar(false)
    }

    return (
        <>
            <div className="navBar container">
                <a href="#!" className="logo">F<span>oo</span>diesHub</a>
                <div className="navLinks">
                {links.map(link => (
                    <a href='#!' key={link.name}>{link.name}</a>
                ))}
                {/* <a href="#!" className="active">Home</a>
                <a href="#!">Recipes</a>
                <a href="#!">Settings</a> */}
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