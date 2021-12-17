import React from "react";
import { Badge } from "antd";
import { useSelector } from "react-redux";
import { ShoppingCart } from "react-feather";
export default function MyBadge() {
  const cartItems = useSelector((state) => state.cart.cartItems);
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
          count={cartItems.length}
          size="small"
        >
          <ShoppingCart color="var(--colorMain1)" size="20" />
        </Badge>
      </div>
    </div>
  );
}
