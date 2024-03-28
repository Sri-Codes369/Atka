import React, { useState, useEffect, useRef } from 'react';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

function Gallery() {
  const SliderData = [
    {
      image: 'https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80'
    },
    {
      image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
    },
    {
      image: 'https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80'
    },
    {
      image: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
    }
  ];

  const [current, setCurrent] = useState(0);
  const length = SliderData.length;
  const sliderRef = useRef(null);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [current]);

  const handleSliderClick = (e) => {
    const sliderRect = sliderRef.current.getBoundingClientRect();
    const clickX = e.clientX - sliderRect.left;
    const sliderWidth = sliderRect.width;

    if (clickX > sliderWidth / 2) {
      nextSlide();
    } else {
      prevSlide();
    }
  };

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }

  return (
    <section className='slider' onClick={handleSliderClick} ref={sliderRef}
    style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 77%), rgba(0, 0, 0, 68%)), url(${SliderData[current].image},)`,
        backgroundRepeat:'no-repeat',
        backgroundSize: 'cover'
      }}>
      <SlArrowLeft className='left-arrow' onClick={prevSlide} />
      <SlArrowRight className='right-arrow' onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
            
          >
            {index === current && (
              <img src={slide.image} alt='travel image' className='image' />
            )}
          </div>
        );
      })}
    </section>
  );
}

export default Gallery;
