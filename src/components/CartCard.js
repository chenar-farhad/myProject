import React, { useState } from "react";
import { Skeleton, Switch, Card, Avatar, Badge } from "antd";
import { Plus, Minus, X } from "react-feather";
import { useSelector, useDispatch } from "react-redux";
import "./styles/CartCard.css";
import { removeProduct } from "../features/cartSlice";

const { Meta } = Card;

export default function CartCard(props) {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  return (
    <div>
      <div className="iCartCard">
        <Badge
          offset={[-5, 20]}
          style={{ fontFamily: "arial" }}
          count={qty}
          size="default"
        >
          <Card
            // className="iCartCard"
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
                  dispatch(
                    removeProduct(props.index));

                  // setQty(0);
                }}
                key="ellipsis"
              />,
            ]}
          >
            <Meta
              avatar={<Avatar src={props.image} size="large" shape="square" />}
              title={props.title}
              description={props.description}
            />
          </Card>
        </Badge>
      </div>
    </div>
  );
}

/******************************** */
//   <Card
//     title={p.title}
//     about={p.description}
//     image={p.image}
//     style={{ width: 300, marginTop: 16 }}
//     actions={[
//       <Minus
//         onClick={() => {
//           setQty(qty - 1);
//         }}
//         key="setting"
//       />,
//       <Plus
//         onClick={() => {
//           setQty(qty + 1);
//         }}
//         key="edit"
//       />,
//       <X
//         onClick={() => {
//           setQty(0);
//         }}
//         key="ellipsis"
//       />,
//     ]}
//   >
//     {qty}
//   </Card>

// <div className="iBody">
//   <div className="iCartCard">
//     <div>
//       <img src={p.image} />
//     </div>
//     <div className="titleAndDes">
//       <title>{p.title}</title>
//       <p>{p.desctiption}</p>
//     </div>
//     <div>
//       <div className="iCartCardComponent">csd</div>
//     </div>
//   </div>
// </div
