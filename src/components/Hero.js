import { LoginOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import React from "react";
import FeatherIcon from "feather-icons-react";

export default function Hero() {
  return (
    <div class="iTopHero">
      <Menu onClick={() => {}} mode="horizontal" style={{ width: "100vw" }}>
        <Menu.Item key="home" icon={<FeatherIcon icon="log-in" size={20} />}>
          چوونەژوورەوە
        </Menu.Item>
        <Menu.Item key="home" icon={<LoginOutlined />}>
          تۆمارکردن
        </Menu.Item>
        <Menu.Item key="kalla">کاڵاکان</Menu.Item>
        <Menu.Item key="dukanakan">دوکانەکان</Menu.Item>
      </Menu>
    </div>
  );
}
