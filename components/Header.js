import React, {useState} from 'react';
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import cx from 'classnames';
import './CommonHeader.css';
import Logo from '../../../assets/images/logo.jpg';
import langIcon from '../../../assets/images/langIcon.png';
import menuIcon from '../../../assets/images/menuIcon.png';
import userIcon from '../../../assets/images/userIcon.png';
import LoginModal from '../../Login/LoginModal';
import SignupModal from '../../RegisterPage/SignupModal';
import HomeSearch from '../../HomeSearch/HomeSearch';
import DesktopNavigation from '../../Navigation/DesktopNavigation';
import MobileNavigation from '../../Navigation/MobileNavigation';
import { useNavigate, useLocation } from "react-router-dom";


const CommonHeader = () =>{

    const [openModal, setOpenModal] = useState(false)
    const [openRegModal, setOpenRegModal] = useState(false)
    const [sideMenuWidth, setSideMenuWidth] = useState(0)
    const navigate = useNavigate();
    const handleLoginClick = () =>{
        setOpenModal(true);
        setSideMenuWidth(0)
    } 
    const handleRegClick = () => {
        setOpenRegModal(true);
        setSideMenuWidth(0)
    }
    
    const openNav = () => setSideMenuWidth(100)
    const closeNav = () => setSideMenuWidth(0)

    const logOut = () =>{
        if (window && typeof window !== "undefined") {
            window.localStorage.clear();
            window.location.reload();
        }
        navigate('/login');
    }

    return(
        <React.Fragment>
            <div className='headerSec'>
                <div className='headerBg'>
                    <Navbar expand="lg">
                        <Container>
                            <div className={cx('headerFlex')}>
                                <Navbar.Brand href="/">
                                    <img src={Logo} className='logoImage'/>
                                </Navbar.Brand>
                                <div>
                                    <HomeSearch/>
                                </div>
                                <ul className='headerMenuLists'>
                                    <li><a href=''><img src={langIcon} className={'langIcon'}/></a></li>
                                    <li className='headerDropDown'>
                                    <DesktopNavigation 
                                    handleLoginClick={handleLoginClick}
                                    handleRegClick={handleRegClick}
                                    logOut={logOut}
                                    />
                                    </li>
                                </ul>
                            </div>
                            {openModal && 
                                <LoginModal isOpen={true} closeModal={setOpenModal} />
                            }
                            {openRegModal &&  
                                <SignupModal isOpen={true} closeModal={setOpenRegModal}/>
                            }
                            
                        </Container>
                    </Navbar>
                </div>
            </div>
            <div  className='headerSec'>
                <div className='mobileHeader headerBg'>
                    <div className='headerFlex'>
                        <img src={Logo} className='logoImage' alt=''/>
                        <div className={'dropdownMenuFlex'} onClick={openNav}>
                            <img src={menuIcon} className='dropDownIcon menuIcon' alt=''/>
                            <img src={userIcon} className='dropDownIcon' alt=''/>
                        </div>
                    </div>
                    <div id="mySidenav" className="sidenav" style={{width:`${sideMenuWidth}%`}}>
                        <a className="closebtn" onClick={closeNav}>&times;</a>
                        <MobileNavigation
                            handleLoginClick={handleLoginClick}
                            handleRegClick={handleRegClick}
                            logOut={logOut}/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}


export default CommonHeader


