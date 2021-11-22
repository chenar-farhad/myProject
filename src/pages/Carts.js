import React from "react";
import { useSelector } from "react-redux";
import CartCard from "../components/CartCard";
import ProductCard from "../components/ProductCard";
import "../components/styles/Carts.css";

export default function Carts() {
  const products = useSelector((state) => state.cart.products);
  return (
    <div className="iBodyCart">
      <div className="iCarts">
        {products.map((p, index) => {
          return (
            <div>
              {/* <ProductCard */}
              <CartCard
                title={p.title}
                description={p.description}
                image={p.image}
                // key={index}
                index={index}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
