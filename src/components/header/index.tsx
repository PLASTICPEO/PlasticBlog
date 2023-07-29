import { useHeader } from "./hooks/useHeader";
import { useContext } from "react";
import { AppContext } from "../../context/ContextProvider";

import { Input } from "antd";

import { Link } from "react-router-dom";

// import { useUserData } from "../../api/api";

import CustomModal from "../modal";
import Logo from "../../assets/logo.svg";
import LogInContent from "./loginContent";

const Header = () => {
  const { scrollY } = useHeader();
  // const { isLoading, error, data } = useUserData(["userData"]);

  const changeHeaderColor = scrollY < 290 ? "bg-[#5295CB]" : "bg-[#F6F6F4]";
  const changeHeaderButtonColor =
    scrollY < 290
      ? "text-[#FFFFFF] border-[#5295CB] bg-[black] "
      : "text-[#70C1B3] border-[#70C1B3] ";

  return (
    <div
      className={`flex items-center transition-all ease-in-out duration-700  justify-between  h-16 fixed w-full p-4 border-b-[1px] border-[black] px-20 z-50 ${changeHeaderColor}`}
    >
      <div>
        <Link to="/">
          <div className="flex items-center justify-center">
            <img src={Logo} alt="logo" className="w-12 rounded-full" />
          </div>
        </Link>
      </div>
      <div className="flex">
        <CustomModal
          triggerProps={{
            className: `m-2 hover:bg-[#FFFFFF]  ${changeHeaderButtonColor}`,
          }}
          buttonValue="Sign in"
          title="Welcome Back."
        >
          <LogInContent />
        </CustomModal>
        {/* <CustomModal
          triggerProps={{
            className: `m-2 hover:bg-[#FFFFFF] ${changeHeaderButtonColor}`,
          }}
          buttonValue="Sign up"
          title="Join us."
        >
          <div></div>
        </CustomModal> */}
      </div>
    </div>
  );
};

export default Header;
