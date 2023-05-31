import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import portfolio_home from "../assets/portfolio_home_slide.png";
import portfolio_skills from "../assets/portfolio_skills_slide.png";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const carouselItems = [
    { image: portfolio_home, alt: "" },
    { image: portfolio_skills, alt: "" },
]

const imageWidth = css`
  width: 100%;
`

export const Carousel = () => {

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
    };

    return (
        <Slider {...sliderSettings}>
          {carouselItems.map((carouselItem, index) => (
            <div key={index}>
              <img
                css={imageWidth}
                src={carouselItem.image}
                alt={carouselItem.alt}
              />
            </div>
          ))}
        </Slider>
    );
};