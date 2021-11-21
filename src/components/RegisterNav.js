import { LoginOutlined, UsergroupAddOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import React from "react";
import "./styles/RegisterNav.css";

export default function RegisterNav() {
  return (
    <div className="">
      <div className="iRegisterNav">
        <h1 className="font_english">Online Bazzar</h1>

        <Menu onClick={() => {}} mode="horizontal" style={{ width: "100vw" }}>
          <Menu.Item key="login" icon={<LoginOutlined />}>
            چوونەژوورەوە
          </Menu.Item>
          <Menu.Item key="register" icon={<UsergroupAddOutlined />}>
            تۆمارکردن
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
}
