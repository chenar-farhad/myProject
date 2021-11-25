import { LoginOutlined, UsergroupAddOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "./styles/RegisterNav.css";

export default function RegisterNav() {
  return (
    <div className="">
      <div className="iRegisterNav">
        <h1 className="font_english">Online Bazzar</h1>

        <Menu onClick={() => {}} mode="horizontal" style={{ width: "100vw" }}>
          <Menu.Item key="login" icon={<LoginOutlined />}>
            <Link as={Link} to="/login">
              چوونەژورەوە
            </Link>
          </Menu.Item>
          <Menu.Item key="register" icon={<UsergroupAddOutlined />}>
            <Link as={Link} to="/register">
              تۆمارکردن
            </Link>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
}
