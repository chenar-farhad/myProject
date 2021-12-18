import "./styles/ProductCard.css";
import React from "react";
import { Card, Button, Tooltip } from "antd";
import {
  MdOutlineShoppingCart,
  MdOutlineRemoveShoppingCart,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, removeProduct } from "../features/cartSlice";
import { Link } from "react-router-dom";

const { Meta } = Card;

export default function ProductCard({ product }) {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const productIDs = [];
  cartItems.map((product) => {
    return productIDs.push(product._id);
  });

  const dispatch = useDispatch();
  return (
    <div className="iCardContainer">
      <Card
        className="iCard"
        hoverable
        cover={
          <Link to={`/products/${product._id}`}>
            <img alt="example" src={product.img} />
          </Link>
        }
      >
        <Tooltip title={product.title}>
          <Link to={`/products/${product._id}`}>
            <Meta
              className="iCardDetail"
              title={product.productName}
              description={product.description}
            />
          </Link>
        </Tooltip>

        <div className="iCardFooter">
          <p className="font_english" style={{ direction: "ltr" }}>
            {parseFloat(product.price).toLocaleString()} IQD
          </p>

          <div>
            {!productIDs.includes(product._id) ? (
              <Tooltip title="بیکە سەبەتەکەوە">
                <Button
                  onClick={() => {
                    dispatch(
                      addProduct({
                        title: product.productName,
                        description: product.description,
                        image: product.img,
                        price: product.price,
                        _id: product._id,
                        amount: 1,
                      })
                    );
                  }}
                  className="btnAdd"
                  icon={<MdOutlineShoppingCart />}
                ></Button>
              </Tooltip>
            ) : (
              <Tooltip title="دەریکە لە سەبەتەکە">
                <Button
                  className="btnRemove"
                  icon={<MdOutlineRemoveShoppingCart size="15" width="40" />}
                  onClick={() => {
                    dispatch(removeProduct(product._id));
                  }}
                ></Button>
              </Tooltip>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
}
