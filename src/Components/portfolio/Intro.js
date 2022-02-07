import React from 'react';
import guyCoding from "../../Resources/Images/guyCoding.png";
import profileImage from "../../Resources/Images/dic6.PNG";
import YouTube from 'react-youtube';
import ReactPlayer from 'react-player'
import { WhatsAppOutlined } from "@ant-design/icons";
import { LinkedinFilled, GithubFilled, FacebookFilled } from "@ant-design/icons"
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
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing</p>
                    <div>Resume</div>
                    <section className="portfolio-intro-card-social-wrapper">
                        <LinkedinFilled onClick={()=>window.open("https://github.com/","_blank")}/>
                        <GithubFilled />
                        <FacebookFilled />
                    </section>
                </section>
            </section>
        )
    }

    const getIntroVideo = () => {
        return <ReactPlayer width="500px" url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
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
