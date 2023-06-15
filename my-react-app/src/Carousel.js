import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

class CarouselComponent extends Component {
  render() {
    return (
      <Carousel showThumbs={false} showStatus={false}>
        {this.props.items.map((url, index) => (
          <div key={index}>
            <img alt="carouselimg" src={url} style={{height: '45vh'}}/>
            {/* <p className="legend">{item.name}</p> */}
          </div>
        ))}
      </Carousel>
    );
  }
}

export default CarouselComponent;
