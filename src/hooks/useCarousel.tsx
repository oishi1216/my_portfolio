import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { CarouselProps } from "../types/Props"

const imageWidth = css`
  width: 100%;
`

export const Carousel:FC<CarouselProps> = (carouselItems) => {

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
          {carouselItems.carouselItems.map((carouselItem) => (
            <div key={carouselItem.id}>
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