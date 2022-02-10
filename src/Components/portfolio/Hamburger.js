import React from "react";
import profileImage from "../../Resources/Images/dic6.PNG";
import "./styles/Hamburger.css";
import { Link } from "react-router-dom";
import { MenuFoldOutlined, MenuOutlined, CloseCircleOutlined, CloseOutlined } from "@ant-design/icons";

function Hamburger(props) {

    const getHamburgerHeader = () => {
        return (
            <section className="portfolio-hamburger-header-wrapper">
                <section className='portfolio-header-name-wrapper'>
                    <img src={profileImage} />
                    <h1>Vasudev Harshal</h1>
                </section>
                <CloseCircleOutlined onClick={()=>props.setIsHamburgerOpen(false)}/>
            </section>
        )
    }

    const getHamburgerBody = () => {
        return (
            <section className="portfolio-hamburger-body-wrapper">
                <a onClick={()=>props.setIsHamburgerOpen(false)} href="#protfolio-projects-wrapper">Projects</a>
                <a onClick={()=>props.setIsHamburgerOpen(false)} href="#portfolio-connect-with-me">Contact</a>
                <a onClick={()=>props.setIsHamburgerOpen(false)} href="#portfolio-about-wrapper">About</a>
                <a onClick={()=>props.setIsHamburgerOpen(false)} href="#portfolio-achivement-wrapper">Achivement</a>
                <Link to="resume" onClick={()=>props.setIsHamburgerOpen(false)}>Resume</Link>
            </section>
        )
    }

    if (props.isHamburgerOpen) {
        return (
            <section className="portfolio-hamburger-wrapper">
                {getHamburgerHeader()}
                {getHamburgerBody()}
            </section>
        )
    } else {
        return <></>;
    }
}

export default Hamburger;