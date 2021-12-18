import { LoginOutlined, UsergroupAddOutlined } from "@ant-design/icons";
import { Menu, Avatar, Dropdown, Button } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { applyMiddleware } from "redux";
import { removeUser } from "../features/userSlice";
import "./styles/RegisterNav.css";
import { BiHomeSmile } from "react-icons/all";

let localUser = JSON.parse(localStorage.getItem("localUser"));
let dispatch;

const menu = (
  <Menu>
    {localUser && (
      <div className="iBigNavLoggedinMenuDropdown">
        <div className="iBigNavLoggedinMenu">
          <Link to="/profile">
            <h3>
              {localUser.firstName} {localUser.lastName}
            </h3>
          </Link>
          <p className="font_english">{localUser.username}</p>
        </div>
        <Link
          to="#"
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
        <Link to="/">
          <h1 className="font_english">
            <BiHomeSmile /> Online Bazzar
          </h1>
        </Link>
      </div>
      <div className="iRegisterNav">
        {!localUser && (
          <Menu onClick={() => {}} mode="horizontal">
            <Menu.Item icon={<LoginOutlined />}>
              <Link as={Link} to="/login">
                چوونەژورەوە
              </Link>
            </Menu.Item>
            <Menu.Item icon={<UsergroupAddOutlined />}>
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
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div className="iBigNavLoggedinName">
                    {localUser.firstName} {localUser.lastName}
                  </div>
                  <Avatar
                    className="iBigNavAvatar"
                    size={40}
                    src={localUser?.image}
                  />
                </div>
              </Dropdown>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
