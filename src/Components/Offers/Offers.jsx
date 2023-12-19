// import React from 'react'
// import './Offers.css'
// import exclusive_image from '../Assets/exclusive_image.png'

// const Offers = () => {
//   return (
//     <div className='offers'>
//       <div className="offers-left">
//         <h1>Exclusive</h1>
//         <h1>Offers For You</h1>
//         <p>ONLY ON BEST SELLERS PRODUCTS</p>
//         <button>Check Now</button>
//       </div>
//       <div className="offers-right">
//         <img src={exclusive_image} alt="" />
//       </div>
//     </div>
//   )
// }

// export default Offers

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Offers.css';
// import exclusive_image from '../Assets/exclusive_image.png'
import blak_friday from '../Assets/4.png'
import banner_women_image from '../Assets/banner_women.png'
import banner_men_image from '../Assets/banner_mens.png'
import banner_kids_image from '../Assets/banner_kids.png'
import { Link } from 'react-router-dom'





const Offers = () => {

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 4000, 
  };

  return (
    <div className='offers'>
      <Slider {...sliderSettings}>
        <div className="offers-slide">
          <img src={blak_friday} alt="" style={{cursor: 'pointer'}}/>
        </div>
        <div className="offers-slide">
          <Link to='/womens'><img src={banner_women_image} alt="" /></Link> 
        </div>
        <div className="offers-slide">
          <Link to='/mens'><img src={banner_men_image} alt="" /></Link> 
        </div>
        <div className="offers-slide">
          <Link to='/kids'><img src={banner_kids_image} alt="" /></Link> 
        </div>
      </Slider>
    </div>
  );
};

export default Offers;
