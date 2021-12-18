import React, { useEffect, useState } from "react";
import "../components/styles/register.css";
import { Form, Input, Button, Divider } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link, Navigate } from "react-router-dom";
import { MdAlternateEmail, AiOutlineUserAdd } from "react-icons/all";
import { useDispatch, useSelector } from "react-redux";
import jwt from "jsonwebtoken";

import { useRegisterMutation } from "../services/app.api";
import { addUser } from "../features/userSlice";
export default function Register() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userRegister, { isError, isLoading, data, error }] =
    useRegisterMutation();
  useEffect(() => {
    data && dispatch(addUser(jwt.decode(data?.token)));
  }, [data]);

  return (
    <div className="iBodyRegister">
      {user && <Navigate to="/" />}
      <div className="iContainerRegister">
        <div className="iContentRegister">
          <div className="iRegisterForm"></div>

          <Divider className="iDivider" orientation="right">
            دروستکردنی هەژماری نوێ
          </Divider>

          <Form
            onSubmitCapture={(e) => {
              e.preventDefault();
              userRegister({ username, email, password });
            }}
            name="normal_register"
            className="register-form"
            initialValues={{
              remember: true,
            }}
            // onFinish={onFinish}
          >
            <Form.Item
              className="formItem"
              name="username"
              rules={[
                {
                  required: true,
                  message: "تکایە ناوی بەکارهێنەر بنووسە",
                },
              ]}
            >
              <Input
                prefix={
                  <UserOutlined className="site-form-item-icon iconName" />
                }
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                type="text"
                placeholder="ناوی بەکارهێنان"
              />
            </Form.Item>

            <Form.Item
              className="formItem"
              name="email"
              rules={[
                {
                  required: true,
                  message: "تکایە ئیمەیڵی درووست بنووسە",
                },
              ]}
            >
              <Input
                type="email"
                prefix={
                  <MdAlternateEmail className="site-form-item-icon iconName" />
                }
                placeholder="ئیمەیڵ"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Form.Item>

            <Form.Item
              className="formItem"
              name="password"
              rules={[
                {
                  required: true,
                  message: "تکایە وشەی نیهێنی بنووسە",
                },
              ]}
            >
              <Input
                prefix={
                  <LockOutlined className="site-form-item-icon iconName" />
                }
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                placeholder="وشەی نیهێنی"
              />
            </Form.Item>
            <h4 className="warning">{JSON.stringify(data)}</h4>
            <h4 className="warning">{isError && JSON.stringify(error)}</h4>

            <Form.Item>
              <div className="iFormButtonRegister">
                <Button
                  //   type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  تۆمارکردن <AiOutlineUserAdd style={{ marginLeft: "10px" }} />
                </Button>
                <div style={{ paddingTop: "10px" }}>
                  یان <Link to="/login">بچۆ ژوورەوە</Link>
                </div>
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
