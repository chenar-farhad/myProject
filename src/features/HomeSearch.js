import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Tooltip, Input, Row, Col, Modal } from "antd";
import MyBadge from "../features/MyBadge";
import Cart from "../pages/Carts";
import { Link } from "react-router-dom";



function warning() {
  Modal.warning({
    content: (
      <div style={{ direction: "rtl" }}>
        <h4>
          <b>ببورە، لەئێستادا ئەم بەشە بەردەست نییە! </b>
        </h4>
        <br />

        <p>
          بەهۆی نەبوونی کاتی تەواوە و گەورەی پرۆژەکە بەدوای لێبوردنەوە
          نەمتوانیەوە کار لەتەوەوی پڕۆژەکە بکەم و بەتەواوی ئامادەی بکەم
        </p>
      </div>
    ),
    okText: "قەینا برا ئاساییە",
  });
}
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
          onClick={()=>warning()}
        />
      </Tooltip>

      {/* </Col> */}
      {/* </Row> */}
    </div>
  );
}
