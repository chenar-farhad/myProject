import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Tooltip, Input, Row, Col } from "antd";
import MyBadge from "../features/MyBadge";
import Cart from "../pages/Carts";
import { Link } from "react-router-dom";

export default function HomeSearch() {
  return (
    <div className="iHomeSearch">
      {/* <Row align="middle" justify="center"> */}
      {/* <Col span={1}> */}
      <Link as={Link} to="/carts">
        <MyBadge key="dd" onClick={<Cart />} />
      </Link>
      <Input className="input" placeholder="گەڕان" />
      {/* </Col> */}
      {/* <Col span={20}> */}
      <Tooltip title="گەڕان">
        <Button
          className="btn"
          type="primary"
          shape="circle"
          icon={<SearchOutlined />}
          size="middle"
          style={{}}
        />
      </Tooltip>

      {/* </Col> */}
      {/* </Row> */}
    </div>
  );
}
