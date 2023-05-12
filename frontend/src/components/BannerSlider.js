import React from 'react';
import ImageSlider from './ImageSlider';
import image5 from '../images/image5.jpg'
import image2 from '../images/image2.jpg'
import image6 from '../images/image6.jpg'


const BannerSlider = () => {
  const images = [
    `${image2}`,
    `${image5}`,
    `${image6}`,
  ];

  return (
    <div className="app">
      <ImageSlider images={images} />
    </div>
  );
};

export default BannerSlider;
