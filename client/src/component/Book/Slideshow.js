import React, { Component } from "react";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "http://lorempixel.com/1000/600/nature/1/",
    thumbnail: "http://lorempixel.com/250/150/nature/1/"
  },
  {
    original: "http://lorempixel.com/1000/600/nature/2/",
    thumbnail: "http://lorempixel.com/250/150/nature/2/"
  },
  {
    original: "http://lorempixel.com/1000/600/nature/3/",
    thumbnail: "http://lorempixel.com/250/150/nature/3/"
  }
];

class Slideshow extends Component {
  state = {};
  render() {
    return <ImageGallery items={images} />;
  }
}

export default Slideshow;
