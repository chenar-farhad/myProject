import React from "react";
import MyCard from "../components/MyCard";
import { useSelector } from "react-redux";
import ShoppingCard from "../components/ShoppingCard";

export default function ShoppingCart() {
  const products = useSelector((state) => state.cart.products);
  return (
    <div className="iContainer">
      {products.map((p) => {
        return (
          <>
            <ShoppingCard
              title={p.title}
              description={p.description}
              image={p.image}
            />
          </>
        );
      })}
    </div>
  );
}
