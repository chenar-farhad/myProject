import React, { useState } from "react";
import { Drawer, Button, Avatar } from "antd";
import { Link } from "react-router-dom";
import { Menu } from "react-feather";
import "../styles/nav/MobileNavbar.css";

import {
  BiCategoryAlt,
  BiStore,
  HiOutlineShoppingBag,
  MdOutlineCountertops,
  BiHomeSmile,
} from "react-icons/all";
import { UserOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../features/userSlice";

export default function MobileNavbar() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [visible, setVisible] = useState(false);
  const localUser = JSON.parse(localStorage.getItem("localUser"));

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
            <h1 className="font_english"> Online Bazzar</h1>
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
              {localUser && (
                <Avatar
                  className="iMobileNavSliderHeaderAvatar"
                  size={50}
                  icon={<UserOutlined />}
                  // src="https://scontent.fisu6-2.fna.fbcdn.net/v/t1.6435-9/65508691_2029995600439232_7421391140286365696_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ziDzHpOIxecAX-pnFY-&_nc_ht=scontent.fisu6-2.fna&oh=47a5ddbefc43b82863bda5f7db1752dd&oe=61CFAAC7"
                  src={localUser?.image}
                />
              )}
              <div className="iMobileNavSliderHeaderDes">
                {!localUser && (
                  <div className="iMobileNavSliderHeaderDesLoggedout">
                    <Link to="/register" onClick={onClose}>
                      تۆمارکردن
                    </Link>
                    یان
                    <Link to="/login" onClick={onClose}>
                      چوونە ژوورەوە
                    </Link>
                  </div>
                )}

                {localUser && (
                  <div className="iMobileNavSliderHeaderDesLoggedin">
                    {/* <p>{JSON.stringify(user.username)}</p> */}
                    {console.log(localUser.username)}
                    <Link to="/profile">
                      <h4 className="iLoggedinName">
                        {localUser?.firstName} {localUser?.lastName}
                      </h4>
                    </Link>
                    <p className="font_english iLoggedinUsername">
                      {localUser.username}
                    </p>
                    <Link
                      to="#"
                      onClick={() => {
                        dispatch(removeUser());
                        window.location.reload();
                      }}
                    >
                      <p className="iLoggoutButton">دەرچوون</p>
                    </Link>
                  </div>
                )}
              </div>
            </div>
            <div className="iNavListMobile" style={{ textAlign: "right" }}>
              <ul style={{ listStyleType: "none" }}>
                <li>
                  <Link as={Link} to="/" onClick={onClose}>
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
                    to="#"
                    // style={{ textDecoration: "none", color: "black" }}
                    onClick={onClose}
                  >
                    دووکانەکان
                  </Link>
                </li>
                <li>
                  <Link as={Link} to="#" onClick={onClose}>
                    بەشەکان
                  </Link>
                </li>
                <li>
                  <Link as={Link} to="#" onClick={onClose}>
                    دڵخوازەکان
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
