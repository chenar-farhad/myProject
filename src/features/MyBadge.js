import React from "react";
import { Badge, Avatar } from "antd";
import { useSelector } from "react-redux";
import { ShoppingCart, ShoppingBag } from "react-feather";
export default function MyBadge() {
  const products = useSelector((state) => state.cart.products);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingRight: "10px",
        }}
      >
        <Badge
          style={{ fontFamily: "arial" }}
          count={products.length}
          size="small"
        >
          <ShoppingBag color="var(--colorMain1)" size="20" />
        </Badge>
      </div>
    </div>
  );
}
