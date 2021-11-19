import { Carousel } from "antd";
import React from "react";

const contentStyle = {
  height: "260px",
  color: "#fff",
  lineHeight: "360px",
  textAlign: "center",
  background: "#3fd1a5",
};

export default function HomeSlider() {
  return (
    <div className="iHomeSlider">
      <Carousel autoplay >
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
      ,
    </div>
  );
}
