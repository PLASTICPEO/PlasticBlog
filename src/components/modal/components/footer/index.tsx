import { Button, ConfigProvider } from "antd";
import { useContext } from "react";
import { AppContext } from "../../../../context/ContextProvider";

const Footer: React.FC<{
  hideModal?: () => void;
  // authPerson?: () => void;
  // btnValue?: any;
}> = ({ hideModal }) => {
  const { wrongInput } = useContext(AppContext);
  return (
    <div className="flex items-center justify-center ">
      <ConfigProvider
        theme={{
          token: { colorPrimaryHover: "#70C1B3", colorText: "#ADAEAD" },
        }}
      >
        {wrongInput ? (
          <p className="font-lora text-base font-bold  text-[#F47D7B] w-full flex items-center justify-center">
            Password or email is incorrect.
          </p>
        ) : (
          <p className="font-lora text-base font-bold  text-[#ADAEAD] w-full flex items-center justify-center">
            Discover Share Inspire.
          </p>
        )}
      </ConfigProvider>
    </div>
  );
};

export default Footer;
