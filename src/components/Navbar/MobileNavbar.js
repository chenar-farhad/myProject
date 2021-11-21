import React, { useState } from "react";
import { Drawer, Button } from "antd";
import { Link } from "react-router-dom";
import { Menu } from "react-feather";
import "../styles/nav/MobileNavbar.css"

export default function MobileNavbar() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <div id="#mobailNav" className="iNav">
        <Button onClick={showDrawer}>
          <Menu />
        </Button>

        <Drawer
          title="O-Bazzar"
          placement="right"
          onClose={onClose}
          visible={visible}
        >
          <div className="iNavListMobile" style={{ textAlign: "right" }}>
            <ul style={{ listStyleType: "none" }}>
              <li>
                <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                  دوکانەکان
                </Link>
              </li>
              <li>
                <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                  بابەتەکان
                </Link>
              </li>
              <li>
                <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                  شتی تر
                </Link>
              </li>
            </ul>
          </div>
        </Drawer>
      </div>

      <div id="#bigNav"></div>
    </>
  );
}
