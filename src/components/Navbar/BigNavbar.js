import React from "react";
import { Menu, Affix, Modal } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import HomeSearch from "../../features/HomeSearch";
import "../styles/nav/BigNavbar.css";
import { Link } from "react-router-dom";
import RegisterNav from "../RegisterNav";
// import MyBadge from "../../features/MyBadge";
// import Cart from "../../pages/Carts";
import {
  BiCategoryAlt,
  BiStore,
  HiOutlineShoppingBag,
  MdOutlineCountertops,
  BiHomeSmile,
} from "react-icons/all";

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

export default function BigNavbar() {
  const { SubMenu } = Menu;

  return (
    <div className="iBigNavParent">
      <RegisterNav />
      <Affix offsetTop={0}>
        <div id="iBigNav" className="iBigNav">
          <Menu onClick={() => {}} mode="horizontal" style={{ width: "100vw" }}>
            <Menu.Item key="home">
              <Link as={Link} to="/home">
                <BiHomeSmile /> سەرەتا
              </Link>
            </Menu.Item>
            <Menu.Item key="kalla">
              <Link as={Link} to="/products">
                <HiOutlineShoppingBag /> کاڵاکان
              </Link>
            </Menu.Item>
            <Menu.Item
              key="dukanakan"
              onClick={() => {
                warning();
              }}
            >
              <BiStore /> دوکانەکان
            </Menu.Item>
            <SubMenu key="SubMenu" title={`بەشەکان`}>
              <Menu.Item disabled key="setting:1">
                ئەلیکترۆنی
              </Menu.Item>
              <Menu.Item disabled key="setting:2">
                جلوبەرگ
              </Menu.Item>
              <Menu.Item disabled key="setting:3">
                کاتژمێر و ئێکسکوارات
              </Menu.Item>
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
