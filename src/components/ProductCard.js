import "./styles/ProductCard.css";
import React from "react";
import { Card, Button, Tooltip } from "antd";
import {
  ShoppingCartOutlined,
  HeartOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { addProduct } from "../features/cartSlice";
import { Link } from "react-router-dom";

const { Meta } = Card;

export default function ProductCard(props) {
  const dispatch = useDispatch();
  return (
    <div>
      <Card
        className="iCard"
        hoverable
        cover={
          <Link to="/products/5">
            <img alt="example" src={props.image} />
          </Link>
        }
      >
        <Tooltip title={props.title}>
          <Link to="/products/5">
            <Meta
              className="iCardDetail"
              title={props.title}
              description={props.description}
            />
          </Link>
        </Tooltip>

        <div className="iCardFooter">
          <p className="font_english" style={{ direction: "ltr" }}>
            {props.price} IQD
          </p>

          <div>
            <Button
              onClick={() => {
                dispatch(
                  addProduct({
                    title: props.title,
                    description: props.description,
                    image: props.image,
                    price: props.price,
                  })
                );
              }}
              icon={<ShoppingCartOutlined />}
            ></Button>
            <Button icon={<HeartOutlined />}></Button>
            <Tooltip title="Share">
              <Button icon={<ShareAltOutlined />}></Button>
            </Tooltip>
          </div>
        </div>
      </Card>
    </div>
  );
}
