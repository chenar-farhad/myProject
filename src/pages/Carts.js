import React from "react";
import { useSelector } from "react-redux";
import CartCard from "../components/CartCard";
import "../components/styles/Carts.css";

export default function Carts() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <div className="iBodyCart">
      <div className="iCartContainer">
        <div className="iCarts">
          {cartItems.map((p, index) => {
            return (
              <div>
                <CartCard key={index} product={p} />
              </div>
            );
          })}
        </div>
        {/* <div className="iCartTotal">
          <div className="iCartTotalText">
            {cartItems.map((p, index) => {
              return (
                <div>
                  <h1> {(p.price * p.amount)}</h1>
                </div>
              );
            })}
          </div>
          <div className="iCartTotalButton"></div>
        </div> */}
      </div>
    </div>
  );
}
