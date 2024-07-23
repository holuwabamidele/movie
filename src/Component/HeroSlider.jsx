import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import slider1 from "../assets/images/slider-badag.jpg";
import slider2 from "../assets/images/slider-badging.jpg";
import slider3 from "../assets/images/slider-scale.jpg";
import slider4 from "../assets/images/slider-scales.jpg";
import styled from "styled-components";

const HeroSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <a>
          <img src={slider1} alt="" />
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src={slider2} alt="" />
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src={slider3} alt="" />
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src={slider4} alt="" />
        </a>
      </Wrap>
    </Carousel>
  );
};

export default HeroSlider;

const Carousel = styled(Slider)`
  & > button {
    opacity: 0.5;
    z-index: 100;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }

  .slick-prev {
    left: 75px;
    z-index: 100;
  }
  .slick-next {
    right: 75px;
    z-index: 100;
  }
`;
const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  cursor: pointer;

  img {
    width: 100%;
  }
`;
