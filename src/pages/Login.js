import React from "react";
import "../components/styles/login.css";
import { FiLogIn } from "react-icons/all";
import { Form, Input, Button, Divider } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="iBodyLogin">
      <div className="iContainerLogin">
        <div className="iContentLogin">
          <div className="iLoginForm"></div>

          <Divider className="iDivider" orientation="right">
            چوونەژورەوە
          </Divider>

          <Form
            name="normal_login"
            className="login-form"
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
                placeholder="وشەی نیهێنی"
              />
            </Form.Item>

            <Form.Item>
              <div className="iFormButton">
                <Button
                  //   type="primary"
                  htmlType="submit"
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
  );
}
