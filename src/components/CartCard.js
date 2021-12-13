import React, { useState } from "react";
import { Card } from "antd";
import { Plus, Minus, X } from "react-feather";
import { useSelector, useDispatch } from "react-redux";
import "./styles/CartCard.css";
import { removeProduct } from "../features/cartSlice";

export default function CartCard(props) {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);

  return (
    <div className="iCartCardBody">
      <Card
        className="iCartCard"
        actions={[
          <Minus
            onClick={() => {
              setQty(qty - 1);
            }}
            key="setting"
          />,
          <Plus
            onClick={() => {
              setQty(qty + 1);
            }}
            key="edit"
          />,
          <X
            onClick={() => {
              dispatch(removeProduct(props.index));
              // setQty(0);
            }}
            key="ellipsis"
          />,
        ]}
      >
        <div className="iCartCardDesParent">
          <div className="iCartCardDes">
            <div className="iCartCardDesText">
              <h1 className="iCartCardDesTextTitle">{props.title}</h1>
              <p className="iCartCardDesTextDes">{props.description}</p>
            </div>
            <div className="iCartCardDesImage">
              <img src={props.image} alt="img" />
            </div>
          </div>
          <div className=" iCartCardDesPrice">
            <h1 className="font_english">
              {parseFloat(props.price).toLocaleString()} IQD
            </h1>
            <p className="font_english">*</p>
            <h1 className="font_english">{qty}</h1>
            <p>=</p>
            <h1 className="font_english iCartCardDesTextPrice">
              {(qty * parseFloat(props.price)).toLocaleString()} IQD
            </h1>
          </div>
        </div>
      </Card>
    </div>
  );
}