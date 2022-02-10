import React, {useState} from 'react';
import profileImage from "../../Resources/Images/dic6.PNG";
import Hamburger from "./Hamburger";
import "./styles/Header.css";
import { MenuFoldOutlined, MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";


function Header(props) {
  const [isHamburgerOpen,setIsHamburgerOpen] = useState(false);
 
  return (
    <section className='portfolio-header-wrapper'>
        { window.innerWidth<661 ? <MenuFoldOutlined style={{fontSize:"30px"}} onClick={()=>setIsHamburgerOpen(true)} /> : ""}
        <Hamburger isHamburgerOpen={isHamburgerOpen} setIsHamburgerOpen={setIsHamburgerOpen}/>
        <section className='portfolio-header-name-wrapper'>
            <img src={profileImage}/>
            <h1>Vasudev Harshal</h1>
        </section>

        <section className='portfolio-header-nav-wrapper'>
            <a href="#protfolio-projects-wrapper">Projects</a>
            <a href="#portfolio-connect-with-me">Contact</a>
            <a href="#portfolio-about-wrapper">About</a>
            <a href="#portfolio-achivement-wrapper">Achivement</a>
            <Link to="resume">Resume</Link>
        </section>
    </section>
  )
}

export default Header;

/*

*/