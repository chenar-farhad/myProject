import React from "react";
import { Menu, Affix } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import HomeSearch from "../../features/HomeSearch";
import "../styles/nav/BigNavbar.css";
import { Link } from "react-router-dom";
import RegisterNav from "../RegisterNav";
// import MyBadge from "../../features/MyBadge";
// import Cart from "../../pages/Carts";
export default function BigNavbar() {
  const { SubMenu } = Menu;

  return (
    <div className="iBigNavParent">
      <RegisterNav />
      <Affix offsetTop={0}>
        <div id="iBigNav" className="iBigNav">
          <Menu onClick={() => {}} mode="horizontal" style={{ width: "100vw" }}>
            <Menu.Item key="home" icon={<HomeOutlined />}>
              <Link as={Link} to="/home">
                سەرەتا
              </Link>
            </Menu.Item>
            <Menu.Item key="kalla">
              <Link as={Link} to="/products">
                کاڵاکان
              </Link>
            </Menu.Item>
            <Menu.Item key="dukanakan">دوکانەکان</Menu.Item>
            <SubMenu key="SubMenu" title="بەشەکان">
              <Menu.Item key="setting:1">ئەلیکترۆنی</Menu.Item>
              <Menu.Item key="setting:2">جلوبەرگ</Menu.Item>
              <Menu.Item key="setting:3">کاتژمێر و ئێکسکوارات</Menu.Item>
            </SubMenu>
            {/* <Menu.Item>
          <Link as={Link} to="/cart">
            <MyBadge key="dd" onClick={<Cart />} />
          </Link>
          </Menu.Item> */}
          </Menu>
          <div>
            <HomeSearch />
          </div>
        </div>
      </Affix>
    </div>
  );
}
