import React from 'react';
import ImageSlider from './ImageSlider';
import image5 from '../images/image5.jpg'
import image2 from '../images/image2.jpg'
import image3 from '../images/image3.jpg'


const BannerSlider = () => {
  const images = [
    `${image5}`,
    `${image2}`,
    `${image3}`,
  ];

  return (
    <div className="app">
      <ImageSlider images={images} />
    </div>
  );
};

export default BannerSlider;
