import React from "react";
import { useSelector } from "react-redux";
import CartCard from "../components/CartCard";
import "../components/styles/Carts.css";

export default function Carts() {
  const products = useSelector((state) => state.cart.products);
  return (
    <div className="iBodyCart">
      <div className="iCarts">
        {products.map((p, index) => {
          return (
            <div>
              <CartCard
                title={p.title}
                description={p.description}
                image={p.image}
                index={index}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
