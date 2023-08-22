import { useContext, useEffect, useState } from "react";
import { useHeader } from "./hooks/useHeader";
import { AppContext } from "../../context/ContextProvider";

import { Link, useParams } from "react-router-dom";

import CustomModal from "../modal";
import LogInContent from "./login";
import AuthHeader from "./authHeader";
import Register from "./register";
import Logo from "../../assets/logo.svg";

const Header: React.FC<{ isColor?: string }> = ({ isColor }) => {
  const { scrollPositionTop } = useContext(AppContext);
  const { scrollY, handleLogin, handleRegister, loginRef, isAuthenticated } =
    useHeader();
  const [headerColor, setHeaderColor] = useState("");
  useEffect(() => {
    setHeaderColor(`${isColor}`);
  }, [isColor]);

  const isAuthHeaderColor = !isAuthenticated ? "h-12" : "h-16";
  const changeHeaderColor = scrollY < 470 ? "bg-[#A4C794]" : "bg-[#F6F6F4]";
  const margineX = isAuthenticated ? "px-20" : "px-4";
  const changeHeaderButtonColor =
    scrollY < 470
      ? "text-[#FFFFFF] border-none bg-[#0B0014] "
      : "text-[#FFFFFF] border-none bg-[#0B6E4F]";

  return (
    <div
      className={`fixed top-[0%] left-[0%] ${isAuthHeaderColor} flex items-center justify-between transition-colors ease-in-out duration-200 w-full p-4 border-b-[1px] z-50 ${headerColor}  ${margineX} ${changeHeaderColor}`}
    >
      <div>
        <Link to="/">
          <div
            className="flex items-center justify-center"
            onClick={scrollPositionTop}
          >
            <img
              src={Logo}
              alt="logo"
              className={`${
                isAuthenticated ? "w-12" : "w-10"
              } rounded-full hover:animate-spin`}
            />

            <p
              className={`${
                isAuthenticated ? "text-4xl" : "text-2xl"
              } font-lora  font-bold text-[black]`}
            >
              BLOGPlastic
            </p>
          </div>
        </Link>
      </div>

      <div className="flex">
        <div className="flex">
          <div
            className={`flex items-center ${
              isAuthenticated ? "visible" : "hidden"
            }`}
          >
            <Link to="/about">
              <p className="text-Roboto text-sm cursor-pointer">Our story</p>
            </Link>
            {/* Log in modal */}
            <CustomModal
              triggerProps={{
                className: `m-2 bg-transparent border-none shadow-none text-black`,
              }}
              buttonValue={"Sign in"}
              title="Welcome Back."
              ref={loginRef}
            >
              <LogInContent handleLogin={handleLogin} />
            </CustomModal>
            {/* Sign up modal */}
            <CustomModal
              triggerProps={{
                className: `m-2 rounded-full ${changeHeaderButtonColor}`,
              }}
              buttonValue="Sign up"
              title="Join us."
              ref={loginRef}
            >
              <Register handleRegister={handleRegister} />
            </CustomModal>{" "}
          </div>
          <div className={`flex ${!isAuthenticated ? "visible" : "hidden"}`}>
            <AuthHeader />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
