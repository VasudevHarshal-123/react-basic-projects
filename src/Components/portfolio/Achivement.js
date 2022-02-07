import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "./styles/Achivement.css";
import "slick-carousel/slick/slick-theme.css";
import c1 from "../../Resources/Images/c1.jpg"
import c2 from "../../Resources/Images/c2.jpg"
import c3 from "../../Resources/Images/c3.jpg"

// import "slick-carousel/slick/slick-theme.css";

const settings = {
    className: "center",
    infinite: true,
    autoplay: true,
    dots: true,
    autoplaySpeed: 1000,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
}

function Achivement() {
 
    const getCarousalCard = (achiveImg,title,description) => {
        return (
            <section className="portfolio-achivement-card-wrapper">
                <img src={achiveImg}/>
                <h3>{title}</h3>
                <p>{description}</p>
            </section>
        )
    }

    return (
  <div className="portfolio-achivement-wrapper">
      <h1>Certifications & Achivements</h1>
      <Slider {...settings}>
            {getCarousalCard(c1,"some random tittle","Descriptiion of this achivement on what you did")}
            {getCarousalCard(c1,"some random tittle","Descriptiion of this achivement on what you did")}
            {getCarousalCard(c1,"some random tittle","Descriptiion of this achivement on what you did")}
            {getCarousalCard(c1,"some random tittle","Descriptiion of this achivement on what you did")}
            {getCarousalCard(c1,"some random tittle","Descriptiion of this achivement on what you did")}
            {getCarousalCard(c1,"some random tittle","Descriptiion of this achivement on what you did")}
      </Slider>
  </div>
  )
}

export default Achivement;
