import "../components/styles/login.css";
import React, { useEffect, useState } from "react";
import { Form, Input, Button, Divider } from "antd";
import { Link, Navigate } from "react-router-dom";
import { FiLogIn, IoEnterOutline } from "react-icons/all";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useLoginMutation } from "../services/app.api";
import jwt from "jsonwebtoken";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../features/userSlice";

export default function Login() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userLogin, { data, error }] = useLoginMutation();

  useEffect(() => {
    data && dispatch(addUser(jwt.decode(data?.token)));
  }, [data]);

  return (
    <>
      <div className="iBodyLogin">
        <div className="iContainerLogin">
          <div className="iContentLogin">
            <IoEnterOutline className="loginIcon" />
            {/* {JSON.stringify(jwt.decode(data?.token))} */}
            {user && <Navigate to="/" />}
            <div className="iLogi5nForm">
              <Divider className="iDivider" orientation="right">
                چوونەژورەوە
              </Divider>

              <Form
                onSubmitCapture={(e) => {
                  e.preventDefault();
                  userLogin({ username, password });
                  // <YourComponent/>
                }}
                name="normal_login"
                className="login-form"
                initialValues={{
                  remember: true,
                }}
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
                    id="username"
                    name="username"
                    type="text"
                    placeholder="ناوی بەکارهێنان"
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
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    placeholder="وشەی نیهێنی"
                  />
                </Form.Item>
                <h4 className="warning">{JSON.stringify(error?.data)}</h4>
                <Form.Item>
                  <div className="iFormButton">
                    <Button
                      htmlType="submit"
                      type="submit"
                      className="login-form-button"
                    >
                      چوونەژوورەوە <FiLogIn style={{ marginLeft: "5px" }} />
                    </Button>
                    <div style={{ paddingTop: "10px" }}>
                      یان <Link to="/register">خۆت تۆمار بکە</Link>
                    </div>
                  </div>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
