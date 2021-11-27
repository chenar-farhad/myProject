import React, { useState } from "react";
import { Drawer, Button } from "antd";
import { Link } from "react-router-dom";
import { Menu } from "react-feather";
import "../styles/nav/MobileNavbar.css";
import { IoHomeOutline } from "react-icons/all";
import HomeSearch from "../../features/HomeSearch";
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
          <h1 className="font_english">Online Bazzar</h1>
        </div>
        <div id="#mobailNav" className="iNavMobile">
          <Button onClick={showDrawer}>
            <Menu size={20} />
          </Button>
          <Drawer
            className="iNavListMobileHeadet"
            title={
              <h4 className="font_english">
                <strong> </strong>
              </h4>
            }
            placement="right"
            onClose={onClose}
            visible={visible}
          >
            <div className="iMobileNavSliderFooter">
              <Link to="/register" onClick={onClose}>
                تۆمارکردن
              </Link>
              یان
              <Link to="/login" onClick={onClose}>
                چوونە ژوورەوە
              </Link>
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
