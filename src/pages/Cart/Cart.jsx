import Styles from '../../styles/pages/cart/cart.module.css'
import Card from '../../components/Cart/Card'
import CheckoutCard from '../../components/Cart/CheckoutCard'
// import { Images } from '../../assets/images/index'
import OtherCard from '../../components/Cart/OtherCard'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../../src/App.css'
import { ChevronLeft, ChevronRight } from 'lucide-react';
import PropTypes from 'prop-types';

// Custom Arrow Components

const CustomPrevArrow = ({ onClick }) => (
  <div 
    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white hover:bg-gray-100 rounded-full p-2 shadow-lg transition-all duration-200"
    onClick={onClick}
  >
    <ChevronLeft className="w-5 h-5 text-gray-700" />
  </div>
);

CustomPrevArrow.propTypes = {
  onClick: PropTypes.func
};


const CustomNextArrow = ({ onClick }) => (
  <div 
    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white hover:bg-gray-100 rounded-full p-2 shadow-lg transition-all duration-200"
    onClick={onClick}
  >
    <ChevronRight className="w-5 h-5 text-gray-700" />
  </div>
);

CustomNextArrow.propTypes = {
  onClick: PropTypes.func
};

const Cart = () => {

  const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  speed: 800,
  centerPadding: '10px',
  prevArrow: <CustomPrevArrow />,
  nextArrow: <CustomNextArrow />,
  responsive: [
    {
      breakpoint: 1024, // lg screens
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768, // md screens
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480, // sm screens
      settings: {
        dots:false,
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
  };

  return (
    <>
    <section >
      <div className={Styles.cart}>
        <div className={Styles.left}>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
        <div className={Styles.right}>
          <CheckoutCard/>
        </div>
      </div>
      <div className='p-10'>
        <h1 className='text-2xl mb-2 text-center sm:text-left'>You might also like</h1>
        <div className="image-slider-container w-full">
          <Slider {...settings} className='p-2'>
            {/* <OtherCard/>
            <OtherCard/>
            <OtherCard/>
            <OtherCard/>
            <OtherCard/> */}
            <div className="px-2"><OtherCard/></div>
            <div className="px-2"><OtherCard/></div>
            <div className="px-2"><OtherCard/></div>
            <div className="px-2"><OtherCard/></div>
            <div className="px-2"><OtherCard/></div>
            <div className="px-2"><OtherCard/></div>
            <div className="px-2"><OtherCard/></div>
            <div className="px-2"><OtherCard/></div>
            <div className="px-2"><OtherCard/></div>
            {/* <div>
              <img src="http://placekitten.com/g/400/200" />
            </div>
            <div>
              <img src="http://placekitten.com/g/400/200" />
            </div>
            <div>
              <img src="http://placekitten.com/g/400/200" />
            </div>
            <div>
              <img src="http://placekitten.com/g/400/200" />
            </div> */}
          </Slider>
        </div>
      </div>

      <div className='p-10'>
        <h1 className='text-2xl mb-2 text-center sm:text-left'>Other recommended products</h1>
        <div className="image-slider-container w-full">
          <Slider {...settings} className='p-2'>
            <div className="px-2"><OtherCard/></div>
            <div className="px-2"><OtherCard/></div>
            <div className="px-2"><OtherCard/></div>
            <div className="px-2"><OtherCard/></div>
            <div className="px-2"><OtherCard/></div>
            <div className="px-2"><OtherCard/></div>
            <div className="px-2"><OtherCard/></div>
            <div className="px-2"><OtherCard/></div>
            <div className="px-2"><OtherCard/></div>
          </Slider>
        </div>
      </div>


    </section>
    </>
  )
}

export default Cart