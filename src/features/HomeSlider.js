import { Carousel } from "antd";
import React from "react";
import "../components/styles/home.css";

export default function HomeSlider() {
  return (
    <div className="iHomeSlider">
      <Carousel className="iHomeSliderCarousel" autoplay>
        <div>
          <img
            src="https://m2pwa.elryan.com/media/vaimo/carousel/images/_/-/_-__1.jpeg"
            alt="img"
          />
          {/* <h3 style={contentStyle}>1</h3> */}
        </div>
        <div>
          <img
            src="https://m2pwa.elryan.com/media/vaimo/carousel/images/_/-/_-_-_mobile_1.jpg"
            alt="img"
          />
        </div>
        <div>
          <img
            src="https://m2pwa.elryan.com/media/vaimo/carousel/images/_/-/_-_-mobile_15.png"
            alt="img"
          />
        </div>
        <div>
          <img
            src="https://m2pwa.elryan.com/media/vaimo/carousel/images/_/-/_-_-_-2-mobile.jpg"
            alt="img"
          />
        </div>
      </Carousel>
    </div>
  );
}
