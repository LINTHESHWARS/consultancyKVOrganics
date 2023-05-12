import React from "react";
import PickMeals from "../../Assets/pick-meals-image.png";
import ChooseMeals from "../../Assets/choose-image.png";
import DeliveryMeals from "../../Assets/delivery-image.png";
import './Home.css';

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Healthy Products",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading" style={{fontSize:"3rem"}}>Work</p>
        <h1 className="primary-heading" style={{fontSize:"5rem"}}>How It Works</h1>
        <p className="primary-text" style={{fontSize:"2rem"}}>
        Organic food products are often perceived to be healthier than non-organic food products as they are free from harmful chemical residues, synthetic pesticides, and hormones. They may also contain higher levels of nutrients, such as vitamins, antioxidants, and minerals.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
