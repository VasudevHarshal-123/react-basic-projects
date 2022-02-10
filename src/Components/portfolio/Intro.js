import React from 'react';
import guyCoding from "../../Resources/Images/guyCoding.png";
import profileImage from "../../Resources/Images/dic6.PNG";
import ReactPlayer from 'react-player'
import { WhatsAppOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { LinkedinFilled, GithubFilled, FacebookFilled } from "@ant-design/icons";
import "./styles/Intro.css";

function Intro() {

    const getIntroCard = () => {
        return (
            <section className="portfolio-intro-card-wrapper">
                <section className="portfolio-intro-card-bg-image">
                    <img src={guyCoding} />
                </section>
                <section className="portfolio-intro-card-content-wrapper">
                    <img src={profileImage}/>
                    <h2>Vasudev Harshal</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <div className="resume-CTA"><Link className="resume-link" to="resume">Resume</Link></div>
                </section>
            </section>
        )
    }

    const getIntroVideo = () => {
        let playerWidth = window.innerWidth > 660 ? "500px" : "100vw";
        return (<ReactPlayer width={playerWidth} height="400px" url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />)
    }

    const getIntroBody = () =>{
        return (
            <section className="portfolio-intro-body-wrapper">
                {getIntroCard()}
                {getIntroVideo()}
            </section>
        )
    }

  return (
  <div className="portfolio-intro-wrapper">
        <h1>Introduction</h1>
        {getIntroBody()}
        <div className="connect-whatsapp" onClick={()=>{window.open("https://wa.me/7004813287?text=Hello Harshal, I want to talk to you regarding an opening in my company.")}}>
            <WhatsAppOutlined style={{color:"#fff", fontSize:"30px"}}/>
        </div>
  </div>
  )
}

export default Intro;
