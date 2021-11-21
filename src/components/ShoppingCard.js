import React, { useState } from "react";
import { Skeleton, Switch, Card, Avatar } from "antd";
import { Plus, Minus, X } from "react-feather";
import { useSelector } from "react-redux";



const { Meta } = Card;

export default function ShoppingCard() {
    const products = useSelector((state) => state.cart.products);

  const [qty, setQty] = useState(0);
  return (
    <div>
      {products.map((p) => {
        return (




            
          <Card

          title={p.title}
            description={p.description}
            Avatar={p.image}


            style={{ width: 300, marginTop: 16 }}
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
                  setQty(0);
                }}
                key="ellipsis"
              />,
            ]}
          >
            {qty}
            
          </Card>
        );
      })}
    </div>
  );
}
