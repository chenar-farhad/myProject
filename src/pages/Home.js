import React from "react";
import { Skeleton, Divider } from "antd";

import HomeSlider from "../features/HomeSlider";
export default function Home() {
  return (
    <div className="iHomeBody">
      <div className="iContainer">
        <div className="iHomeHero">
          <HomeSlider />
          <Divider orientation="center">زۆرترین سەردانکراو</Divider>
          <Skeleton active avatar />
        </div>
        <div className="iStores">
          <div className="iHomeStores store1">
            <Divider orientation="right">بەشەکان</Divider>
            <Skeleton active />
          </div>
          <div className="iHomeStores store2">
            <Divider orientation="right">دوکانەکان</Divider>
            <Skeleton active />
          </div>
        </div>
        <div className="iHomeCategories">
          <Divider orientation="right">کاڵاکان</Divider>

          <Skeleton active avatar />
          <Skeleton active avatar />
          <Skeleton active avatar />
          <Skeleton active avatar />
          <Skeleton active avatar />
          <Skeleton active avatar />
          <Skeleton active avatar />
          <Skeleton active avatar />
        </div>
      </div>

      <footer>
        
      </footer>
    </div>
  );
}