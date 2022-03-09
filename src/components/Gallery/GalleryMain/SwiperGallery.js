import slider1 from "./SliderImg/slider1.png";
import slider2 from "./SliderImg/slider2.png";
import slider3 from "./SliderImg/slider3.png";
import Swiper from "swiper";
import "swiper/css";
import "./Swiper.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper";
const SwiperGallery = () => {
  new Swiper(".swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 3,
    slideToClickedSlide: true,
  });
  const sliderImg = [
    { id: 1, img: slider1 },
    { id: 2, img: slider2 },
    { id: 3, img: slider3 },
    { id: 1, img: slider1 },
    { id: 2, img: slider2 },
    { id: 3, img: slider3 },
  ];
  return (
    <div className="swiper">
      <div className="swiper-wrapper">
        {sliderImg.map(({ img, id }) => (
          <div className="swiper-slide">
            <img src={img} />
          </div>
        ))}
      </div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
};

export default SwiperGallery;
