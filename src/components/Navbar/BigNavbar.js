import React from "react";
import { Menu } from "antd";
import { HomeOutlined } from "@ant-design/icons";

export default function BigNavbar() {
  const { SubMenu } = Menu;

  return (
    <div className="iBigNav">
      <Menu
        onClick={() => {}}
        mode="horizontal"
        style={{ width: "100vw" }}
      >
        <Menu.Item  key="home" icon={<HomeOutlined />}>
          سەرەتا
        </Menu.Item>
        <Menu.Item key="kalla">کاڵاکان</Menu.Item>
        <Menu.Item key="dukanakan">دوکانەکان</Menu.Item>
        <SubMenu key="SubMenu" title="بەشەکان">
          <Menu.Item key="setting:1">ئەلیکترۆنی</Menu.Item>
          <Menu.Item key="setting:2">جلوبەرگ</Menu.Item>
          <Menu.Item key="setting:3">کاتژمێر و ئێکسکوارات</Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
}
