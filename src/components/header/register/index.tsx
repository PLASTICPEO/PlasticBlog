import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import { Form, Input, Button, ConfigProvider } from "antd";
import { useForm } from "antd/es/form/Form";

const Register: React.FC<{ handleRegister: any }> = ({
  handleRegister,
}: any) => {
  const [form] = useForm();

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimaryHover: "#70C1B3",
          colorText: "black",
          colorError: "#F47D7B",
          colorBgTextActive: "none",
        },
      }}
    >
      <Form
        form={form}
        name="horizontal_login"
        layout="vertical"
        onFinish={async (e) => {
          await handleRegister(e);
          form.resetFields();
        }}
      >
        <Form.Item
          name="fullName"
          rules={[{ required: true, message: "Please input your username..." }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="Email"
          rules={[{ required: true, message: "Please input your email..." }]}
        >
          <Input
            prefix={<MailOutlined className="site-form-item-icon" />}
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
            Sign up
          </Button>
        </div>
      </Form>
    </ConfigProvider>
  );
};

export default Register;
