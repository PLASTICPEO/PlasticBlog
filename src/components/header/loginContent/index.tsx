import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Form, Input, Button, ConfigProvider } from "antd";

import { useHeader } from "../hooks/useHeader";

const LogInContent: any = () => {
  const { handleLogin, userInfo, requestToken, form } = useHeader();

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimaryHover: "#70C1B3",
          colorText: "black",
          colorError: "#F47D7B",
        },
      }}
    >
      <Form
        form={form}
        name="horizontal_login"
        layout="vertical"
        onFinish={handleLogin}
      >
        <div>{requestToken ? "" : <p>{userInfo.name}</p>}</div>
        <Form.Item
          name="Email"
          rules={[{ required: true, message: "Please input your email..." }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password..." }]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <div className="w-full flex items-center justify-center">
          <Button htmlType="submit" className="w-[30%]">
            Log in
          </Button>
        </div>
      </Form>
    </ConfigProvider>
  );
};

export default LogInContent;
