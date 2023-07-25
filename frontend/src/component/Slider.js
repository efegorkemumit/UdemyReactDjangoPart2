import React from 'react';
import SimpleImageSlider from 'react-simple-image-slider';
import '../my.css'


const images = [
  { url: '/images/slider/slider1.jpg' },
  { url: '/images/slider/slider2.jpg' },
];

const Slider = () => {
    const sliderContainerStyle = {
      maxWidth: '100%',
      overflow: 'hidden',
    };
  
    const sliderStyle = {
      display: 'block',
      margin: '0 auto',
      maxWidth: '100%',
      width: '80%',
    };


  return (
    <div>
      <div className='slider-container' style={sliderContainerStyle}>
      <div className='slider-wrapper'>
        <div className='slider' style={sliderStyle}>
          <SimpleImageSlider
            width={1920}
            height={504}
            images={images}
            showBullets={true}
            showNavs={true}
            navStyle={{ fontSize: '1.5em' }} // Increase or decrease the font size as needed
            navSize={30} // Adjust the size of the navigation buttons
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Slider;