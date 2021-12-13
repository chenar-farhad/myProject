import React, { useState } from "react";
import { Drawer, Button, Avatar } from "antd";
import { Link } from "react-router-dom";
import { Menu } from "react-feather";
import "../styles/nav/MobileNavbar.css";
import { UserOutlined } from "@ant-design/icons";
export default function MobileNavbar() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <div className="iMobileNavParentBody">
      <div className="  iBodyMobileNav h-11 standalone:h-22">
        <div className=" MobileNavTitle">
          <Link as={Link} to="/">
            <h1 className="font_english">Online Bazzar</h1>
          </Link>
        </div>
        <div id="#mobailNav" className="iNavMobile">
          <Button onClick={showDrawer}>
            <Menu size={20} />
          </Button>
          <Drawer
            className="iNavListMobileHeadet"
            // title={
            //   <h4 className="font_english">
            //     <strong> </strong>
            //   </h4>
            // }
            placement="right"
            onClose={onClose}
            visible={visible}
          >
            <div className="iMobileNavSliderHeader">
              <Avatar
                className="iMobileNavSliderHeaderAvatar"
                size={50}
                icon={<UserOutlined />}
                src="https://scontent.fisu6-2.fna.fbcdn.net/v/t1.6435-9/65508691_2029995600439232_7421391140286365696_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ziDzHpOIxecAX-pnFY-&_nc_ht=scontent.fisu6-2.fna&oh=47a5ddbefc43b82863bda5f7db1752dd&oe=61CFAAC7"
              />

              <div className="iMobileNavSliderHeaderDes">
                <Link to="/register" onClick={onClose}>
                  تۆمارکردن
                </Link>
                یان
                <Link to="/login" onClick={onClose}>
                  چوونە ژوورەوە
                </Link>
              </div>
            </div>
            <div className="iNavListMobile" style={{ textAlign: "right" }}>
              <ul style={{ listStyleType: "none" }}>
                <li>
                  <Link as={Link} to="/home" onClick={onClose}>
                    سەرەتا
                  </Link>
                </li>
                <li>
                  <Link as={Link} to="/products" onClick={onClose}>
                    کاڵاکان
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    بابەتەکان
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    شتی تر
                  </Link>
                </li>
              </ul>
            </div>
          </Drawer>
        </div>
      </div>
    </div>
  );
}
