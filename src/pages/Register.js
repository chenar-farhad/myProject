import React from "react";
import "../components/styles/register.css";
import { FiLogIn } from "react-icons/all";
import { Form, Input, Button, Divider } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { MdAlternateEmail,AiOutlineUserAdd } from "react-icons/all";
export default function Register() {
  return (
    <div className="iBodyLogin">
      <div className="iContainerLogin">
        <div className="iContent">
          <div className="iLoginForm"></div>

          <Divider className="iDivider" orientation="right">
            دروستکردنی هەژماری نوێ
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
