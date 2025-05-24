
import Slider from "react-slick";
import OtherCard from "../Cart/OtherCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = () => {

 const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <OtherCard/>
        <OtherCard/>
        <OtherCard/>
        <OtherCard/>
        <OtherCard/>
        <OtherCard/>
      </Slider>
    </div>
  )
}

export default SliderComponent