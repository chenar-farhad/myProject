import "./styles/ProductCard.css";
import React from "react";
import { Card, Button, Tooltip } from "antd";
import {
  ShoppingCartOutlined,
  HeartFilled,
  ShareAltOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { addProduct } from "../features/cartSlice";

const { Meta } = Card;

export default function ProductCard(props) {
  const dispatch = useDispatch();
  return (
    <div>
      <Card
        className="iCard"
        hoverable
        // loading
        cover={
          <img
            alt="example"
            // src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            src={props.image}
          />
        }
      >
        <Meta
          //   title="جانتای ڕەشی ئافرەتان"
          title={props.title}
          //   description="وردەکاری کاڵا وردەکاری  کاڵا وردەکاری کاڵا وردەکاری کاڵا"
          description={props.description}
        />
        <div className="iCardFooter">
          <p className="font_english">
            <string> Price: 555$</string>
          </p>
          <div>
            <Button
              onClick={() => {
                dispatch(
                  addProduct({
                    title: props.title,
                    description: props.description,
                    image: props.image,
                  })
                );
              }}
              icon={<ShoppingCartOutlined />}
            ></Button>
            <Button icon={<HeartFilled />}></Button>
            <Tooltip title="Share">
              <Button icon={<ShareAltOutlined />}></Button>
            </Tooltip>
          </div>
        </div>
      </Card>
    </div>
  );
}
