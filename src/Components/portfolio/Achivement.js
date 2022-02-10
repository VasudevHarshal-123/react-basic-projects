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
    // autoplay: true,
    arrows: false,
    dots: true,
    autoplaySpeed: 2000,
    centerPadding: "60px",
    slidesToShow: 3,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 660,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
      ]
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
  <div id="portfolio-achivement-wrapper">
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
