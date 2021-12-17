import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
import { Plus, Minus, X } from "react-feather";
import { useDispatch } from "react-redux";
import "./styles/CartCard.css";
import {
  removeProduct,
  incrementQuantity,
  decrementQuantity,
} from "../features/cartSlice";

export default function CartCard({ product }) {
  const dispatch = useDispatch();
  return (
    <div className="iCartCardBody">
      <Card
        className="iCartCard"
        actions={[
          <Minus
            onClick={() => {
              dispatch(decrementQuantity(product._id));
            }}
            key="setting"
          />,
          <Plus
            onClick={() => {
              dispatch(incrementQuantity(product._id));
            }}
            key="edit"
          />,
          <X
            onClick={() => {
              dispatch(removeProduct(product._id));
            }}
            key="ellipsis"
          />,
        ]}
      >
        <div className="iCartCardDesParent">
          <Link to={`/products/${product._id}`}>
            <div className="iCartCardDes">
              <div className="iCartCardDesText">
                <h1 className="iCartCardDesTextTitle">{product.title}</h1>
                <p className="iCartCardDesTextDes">{product.description}</p>
              </div>
              <div className="iCartCardDesImage">
                <img src={product.image} alt="img" />
              </div>
            </div>
          </Link>
          <div className=" iCartCardDesPrice">
            <h1 className="font_english">
              {parseFloat(product.price).toLocaleString()} IQD
            </h1>
            <p className="font_english">*</p>
            <h1 className="font_english">{product.amount}</h1>
            <p>=</p>
            <h1 className="font_english iCartCardDesTextPrice">
              {(product.amount * parseFloat(product.price)).toLocaleString()}{" "}
              IQD
            </h1>
          </div>
        </div>
      </Card>
    </div>
  );
}
