import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";


class CarouselComponent extends Component {
  render() {
    return (
      <Carousel showThumbs={false} showStatus={false}>
        {this.props.items.map((item) => (
          <div key={item.id}>
            <img alt="carouselimg" src={item.image} />
            <p className="legend">{item.name}</p>
          </div>
        ))}
      </Carousel>
    );
  }
}

export default CarouselComponent;
