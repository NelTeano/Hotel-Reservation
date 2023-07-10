import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel as ImageCarousel } from 'react-responsive-carousel';

class Carousel extends Component {
  render() {
    return (
      <ImageCarousel showThumbs={false} showStatus={false}>
        {this.props.items.map((url, index) => (
          <div key={index}>
            <img alt='carouselimg' src={url} style={{ height: '35vh' }} />
            {/* <p className="legend">{item.name}</p> */}
          </div>
        ))}
      </ImageCarousel>
    );
  }
}

export default Carousel;
