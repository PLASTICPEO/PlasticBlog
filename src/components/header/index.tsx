import { useHeader } from "./hooks/useHeader";

import { Input } from "antd";
import { Link } from "react-router-dom";

import CustomModal from "../modal";
import Logo from "../../assets/logo.svg";

const Header = () => {
  const { scrollY } = useHeader();

  const changeHeaderColor = scrollY < 290 ? "bg-[#5295CB]" : "bg-[#F6F6F4]";

  return (
    <div
      className={`flex items-center transition-all ease-in-out duration-700  justify-between  h-14 fixed w-full p-4 border-b-[1px] border-[black] px-20 z-50 ${changeHeaderColor}`}
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
          className: "m-2",
          buttonname: ["Log in", "Sing up"],
        }}
      >
        <Input
          className="mt-4"
          placeholder="Username"
          onChange={(e) => console.log(e.target.value)}
        />
        <Input.Password
          className="mt-2"
          placeholder="Password"
          onChange={(e) => console.log(e.target.value)}
        />
      </CustomModal>
    </div>
  );
};

export default Header;
