import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper-bundle.css";
import 'swiper/css/autoplay'

import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper/core';

// Import your slider images
import slider1 from '../Images/Slide1.jpg';
import slider2 from '../Images/Slide2.jpg'
import slider3 from '../Images/Slide3.jpg';

// Initialize Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay]);


const Slider = () => {
    const slides = [
      { id: 1, image: slider1 },
      { id: 2, image: slider2 },
      { id: 3, image: slider3 }
    ];
  
    const sliderContainerStyle = {
    //   marginTop: 'rem',
      /* Add any additional styles for the slider container */
    };
  
    const sliderStyle = {
      height: '40%', // Decrease the height of the slider by 40%
      /* Add any additional styles for the slider */
    };
  
    return (
      <div style={sliderContainerStyle}>
      <div style={sliderStyle}>
        <Swiper
          navigation
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 1000 }}
          className="w-full h-full"
        >
          {slides.map(slide => (
            <SwiperSlide key={slide.id}>
              <img
                src={slide.image}
                alt={`Slider ${slide.id}`}
                className="object-cover w-full h-full"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
    );
  };
  
  export default Slider;
  
  