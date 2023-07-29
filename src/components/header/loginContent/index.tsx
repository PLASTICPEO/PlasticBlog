import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Form, Input, Button, ConfigProvider } from "antd";

import { useContext } from "react";
import { AppContext } from "../../../context/ContextProvider";

const LogInContent = () => {
  const { onFinish } = useContext(AppContext);
  const [form] = Form.useForm();

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
        onFinish={onFinish}
      >
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

        <Button htmlType="submit">Log in</Button>
      </Form>
    </ConfigProvider>
  );
};

export default LogInContent;
