import React from "react";
import { Badge, Avatar } from "antd";
import { useSelector } from "react-redux";
import { ShoppingCart, ShoppingBag } from "react-feather";
export default function MyBadge() {
  const products = useSelector((state) => state.cart.products);
  return (
    <div>
      <>
        <Badge count={products.length} size="small">
          <ShoppingBag size="20" />
        </Badge>
      </>
    </div>
  );
}
