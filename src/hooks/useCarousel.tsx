import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import portfolio_home from "../assets/portfolio_home_slide.png";
import portfolio_skills from "../assets/portfolio_skills_slide.png";

const carouselItems = [
    { image: portfolio_home, alt: "" },
    { image: portfolio_skills, alt: "" },
]

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
            <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
    );
};