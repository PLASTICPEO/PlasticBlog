import { useHeader } from "./hooks/useHeader";
import { useContext } from "react";
import { AppContext } from "../../context/ContextProvider";

import { Input } from "antd";
import { Link } from "react-router-dom";

import CustomModal from "../modal";
import Logo from "../../assets/logo.svg";

const Header = () => {
  // const { user, setUser } = useContext(AppContext);
  const { scrollY } = useHeader();

  const changeHeaderColor = scrollY < 290 ? "bg-[#5295CB]" : "bg-[#F6F6F4]";
  const changeHeaderButtonColor =
    scrollY < 290
      ? "text-[black] border-none bg-[#ACD9EC] hover:opacity-60"
      : "text-[#5295CB] border-[#5295CB] hover:opacity-60";

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

      <CustomModal
        title="Log in"
        triggerProps={{
          className: `m-2 ${changeHeaderButtonColor}`,
          buttonname: ["Sign in", "Sign up"],
          footer: {
            buttonText: ["ჯემო", "ჯუნო"],
            style: "border-[black] hover:opacity-60",
          },
        }}
      >
        <div></div>
      </CustomModal>
    </div>
  );
};

export default Header;
