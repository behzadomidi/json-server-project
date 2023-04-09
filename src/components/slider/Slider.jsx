import React from "react";
import { Carousel } from "react-bootstrap";
import imageUrl from "../../assets/mesh-gradient.png";

const SliderComponent = ({ data }) => {
  return (
    <Carousel fade>
      {data.map((item) => (
        <Carousel.Item key={item.id}>
          <img className="d-block w-100" src={imageUrl} alt="First slide" />
          <Carousel.Caption>
            <h3>{item.title}</h3>
            <p>{item.slug}</p>
            <small>{item.date}</small>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default SliderComponent;
