import { Carousel } from "antd";
import React from "react";
import "../components/styles/productSlider.css";
import { useGetProductsQuery } from "../services/app.api";
import ProductCard from "./ProductCard";

export default function ProductSlider() {
  const { data, error, isLoading, isSuccess, isError } = useGetProductsQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  if (data) {
    return (
      <div className="iProductSlider">
        <Carousel
          className="iProductCarousel"
          dotPosition="top"
          slidesToShow={4}
          autoplay
        >
          {isLoading && "Loading..."}
          {isError && error.message}
          {isSuccess &&
            //   data &&
            data?.map((e, index) => {
              return <ProductCard key={index} product={e} />;
            })}
        </Carousel>
      </div>
    );
  }
}
