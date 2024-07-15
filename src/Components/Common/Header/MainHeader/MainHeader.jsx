import React, { useState } from 'react';
import markupLogo1 from '../../../../Assets/Icons/logo-mark.png';
import markupLogo2 from '../../../../Assets/Icons/web-icon.png';
import './mainHeader.css'

const En_links =  [
    {
        path: '#home',
        name: 'Home',
        
        icon: <i className="ri-home-2-line"></i>,
    },

    {
        path: '#about_us',
        name: 'About Us',
        icon: <i className="ri-open-arm-line"></i>,

    },
    {
        path: '#services',
        name: 'Services',
        icon: <i className="ri-briefcase-line"></i>,

    },
    {
        path: '#clients',
        name: 'Clients',
        icon: <i className="ri-shake-hands-line"></i>,

    },
    {
        path: '#news_us',
        name: 'News us',
        icon: <i className="ri-newspaper-line"></i>,

    },
    {
        path: '#temework',
        name: 'Temework',
        icon: <i className="ri-team-line"></i>,

    },
    {
        path: '#contact_us',
        name: 'Contact us',
        icon: <i className="ri-chat-3-line"></i>,
    },
    
]





const MainHeader = () => {
    // ====== Toggle Button  ===== //
    const [open, setOpen] = useState(false);

    const showMenu = () => {
        setOpen(!open)
    }





    return (
        <header className='header'>
            <nav className="nav container">
                {/*==== logo ==== */}
                <div href="index.html"  className="img_logo">
                    <img src={markupLogo1} className="markup-img" />
                </div>


                {/* ===== Links  ==== */}
                <div className={open ? "nav__menu show-menu" : 'nav__menu'}>
                    <ul className="grid">
                      <li className="nav__list">
                        {
                            En_links.map((item) => (
                            <a href={item.path} key={item.name} className={`nav__link`}>
                                <span className="nav__icon">{item.icon}</span>
                                <span className="">{item.name}</span>
                            </a>
                                
                            ))
                        }
                        <span className="nav__close" onClick={showMenu}>
                         <i className="ri-close-line"></i>
                        </span>
                      </li>
                    </ul>
                </div>

                <div className="nav__toggle" onClick={showMenu}>
                    <span className="" >
                      <i className="ri-menu-line"></i>
                    </span>
                    
                </div>
            </nav>
             
        </header>
    );
}

export default MainHeader;
