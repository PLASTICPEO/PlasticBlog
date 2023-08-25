import { useContext, useEffect, useState } from "react";
import { useHeader } from "./hooks/useHeader";
import { AppContext } from "../../context/ContextProvider";

import { Link } from "react-router-dom";

import CustomModal from "../modal";
import LogInContent from "./login";
import AuthHeader from "./authHeader";
import Register from "./register";

const Header: React.FC<{ dictatedColor?: string; isWhite?: boolean }> = ({
  dictatedColor,
  isWhite,
}) => {
  const { scrollPositionTop } = useContext(AppContext);
  const {
    handleLogin,
    handleRegister,
    loginRef,
    isAuthenticated,
    contextHolder,
  } = useHeader();
  const [headerColor, setHeaderColor] = useState("");

  useEffect(() => {
    setHeaderColor(`${dictatedColor}`);
  }, [dictatedColor]);

  const isAuthHeaderColor = !isAuthenticated ? "h-12" : "h-16";
  const margineX = isAuthenticated ? "px-20" : "px-4";
  const changeHeaderButtonColor =
    scrollY < 470
      ? "text-[#FFFFFF] border-none bg-[#0B0014] "
      : "text-[#FFFFFF] border-none bg-[#0B6E4F]";

  return (
    <div
      className={`fixed top-[0%] left-[0%] flex items-center justify-between transition-colors ease-in-out duration-200 w-full p-4 border-b-[1px] z-50  ${headerColor} ${isAuthHeaderColor} ${margineX} `}
    >
      {contextHolder}
      <div>
        <Link to="/">
          <div
            className="flex items-center justify-center"
            onClick={scrollPositionTop}
          >
            <span
              className={`material-symbols-outlined  ${
                isWhite ? "text-[#E8EAEE]" : "text-[black]"
              } ${
                isAuthenticated ? "text-5xl" : "text-4xl"
              } rounded-full hover:animate-spin`}
            >
              mode_fan
            </span>

            <p
              className={`${
                isAuthenticated ? "text-4xl" : "text-2xl"
              } font-lora  font-bold ${
                isWhite ? "text-[#E8EAEE]" : "text-[black]"
              }`}
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
              <p
                className={`text-Roboto text-sm cursor-pointer ${
                  isWhite ? "text-[#E8EAEE]" : "text-[black]"
                }`}
              >
                Our story
              </p>
            </Link>
            {/* Log in modal */}
            <CustomModal
              triggerProps={{
                className: `m-2 bg-transparent border-none shadow-none ${
                  isWhite ? "text-[white]" : "text-[black]"
                }`,
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
