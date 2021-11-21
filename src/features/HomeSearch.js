import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Tooltip, Input, Row, Col } from "antd";

export default function HomeSearch() {
  return (
    <div className="iHomeSearch">
      {/* <Row align="middle" justify="center"> */}
        {/* <Col span={1}> */}
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
