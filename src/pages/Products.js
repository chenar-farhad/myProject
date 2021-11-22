import { Divider, Skeleton } from "antd";
import React from "react";
import ProductCard from "../components/ProductCard";

import "../components/styles/Products.css";

export default function Products() {
  return (
    <div className="iBody">
      <div className="iContainerProducts">
        <div className="iItems">
          <Divider className="iDivider" orientation="right">
            کاڵاکان
          </Divider>
          <div className="iProductCards">
          <ProductCard title="title1" description="des1" image="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
          <ProductCard title="title2" description="des2" image="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
          <ProductCard title="title3" description="des3" image="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />

            <Skeleton active />
            <Skeleton active />
            <Skeleton active />
            <Skeleton active />
            <Skeleton active />
            <Skeleton active />
            <Skeleton active />
            <Skeleton active />
            <Skeleton active />
            <Skeleton active />
            <Skeleton active />
          </div>
        </div>
        <div className="iFiltering">
          <Divider className="iDivider" orientation="right">
            جیاکردنەوە
          </Divider>
          <Skeleton active />
          <Skeleton active />
          <Skeleton active />
          <Skeleton active />
          <Skeleton active />
          <Skeleton active />
          <Skeleton active />
          <Skeleton active />
          <Skeleton active />
        </div>
      </div>
    </div>
  );
}
