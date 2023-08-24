import { ConfigProvider } from "antd";

const Footer: React.FC<{
  hideModal?: () => void;
}> = () => {
  return (
    <div className="flex items-center justify-center ">
      <ConfigProvider
        theme={{
          token: { colorPrimaryHover: "#70C1B3", colorText: "#ADAEAD" },
        }}
      >
        <p className="font-lora text-base font-bold  text-[#ADAEAD] w-full flex items-center justify-center">
          Discover Share Inspire.
        </p>
      </ConfigProvider>
    </div>
  );
};

export default Footer;
