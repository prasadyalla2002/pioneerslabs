import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

import './styles.css'
import { MdDashboard } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { FaBitcoinSign } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";


const Sidebar = () =>{
    const [isOpen,setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen)

    const menuItems = [
        {
            path:"/",
            name:"Dashboard",
            icon:<MdDashboard/>

        },
        {
            path:"/about",
            name:"About",
            icon:<FcAbout/>

        },
        {
            path:"/assets",
            name:"Assets",
            icon:<FaBitcoinSign/>

        },

    ]

    return(
        <div className="sidebar-container">
            <div style={{width:isOpen ? "280px":"50px"}} className="sidebar">
                <div className="top-section">
                    <Link style={{display:isOpen ? 'block' : 'none' }} to="/" className="logo">Logo</Link>
                    <div style={{marginLeft:isOpen ? '50px' : '0' }} className="hamburger">
                        <GiHamburgerMenu onClick={toggle}/>
                    </div>
                </div>
                {
                    menuItems.map((each,index) =>(
                        <NavLink to={each.path} key={index} className="link" activeclassname="active">
                            <div className="nav-icon">{each.icon}</div>
                            <div style={{display:isOpen ? 'block' : 'none' }} className="nav-name">{each.name}</div>
                        </NavLink>
                    ))
                }
            </div>
        </div>
    )
}

export default Sidebar