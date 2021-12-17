import { LoginOutlined, UsergroupAddOutlined } from "@ant-design/icons";
import { Menu, Avatar, Dropdown, Button } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeUser } from "../features/userSlice";
import "./styles/RegisterNav.css";
let localUser = JSON.parse(localStorage.getItem("localUser"));
let dispatch;

const menu = (
  <Menu>
    {localUser && (
      <div>
        <p>{localUser.username}</p>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            1st menu item
          </a>
        </Menu.Item>

        <Link
          to="/login"
          onClick={() => {
            dispatch(removeUser());
          }}
        >
          <p className="iLoggoutButton">دەرچوون</p>
        </Link>
      </div>
    )}
  </Menu>
);

export default function RegisterNav() {
  localUser = JSON.parse(localStorage.getItem("localUser"));
  dispatch = useDispatch();

  return (
    <div className="iRegisterBody">
      <div className="iRegisterLogo">
        <h1 className="font_english">Online Bazzar</h1>
      </div>
      <div className="iRegisterNav">
        {!localUser && (
          <Menu onClick={() => {}} mode="horizontal">
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
        )}
        <div className="iBigNavLoggedin">
          {localUser && (
            <>
              <Dropdown overlay={menu} placement="bottomRight" arrow>
                <Avatar
                  className="iBigNavAvatar"
                  size={40}
                  // icon={<UserOutlined />}
                  // src="https://scontent.fisu6-2.fna.fbcdn.net/v/t1.6435-9/65508691_2029995600439232_7421391140286365696_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ziDzHpOIxecAX-pnFY-&_nc_ht=scontent.fisu6-2.fna&oh=47a5ddbefc43b82863bda5f7db1752dd&oe=61CFAAC7"
                  src={localUser?.image}
                />
              </Dropdown>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
