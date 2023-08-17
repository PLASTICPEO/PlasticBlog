import { useContext } from "react";
import { useHeader } from "./hooks/useHeader";
import { AppContext } from "../../context/ContextProvider";

import { Link } from "react-router-dom";

import CustomModal from "../modal";
import LogInContent from "./login";
import AuthHeader from "./authHeader";
import Register from "./register";
import Logo from "../../assets/logo.svg";

const Header: React.FC<{ isWhite?: boolean }> = ({ isWhite }) => {
  const { scrollPositionTop } = useContext(AppContext);
  const { scrollY, handleLogin, handleRegister, loginRef, isAuthenticated } =
    useHeader();

  const isAuthHeaderColor =
    !isAuthenticated || isWhite ? "bg-[#FFFFFF] h-12 border-[#EFE7DA]" : "h-16";
  const changeHeaderColor = scrollY < 290 ? "bg-[#FFC720]" : "bg-[#F6F6F4]";
  const margineX = isAuthenticated ? "px-20" : "px-4";
  const changeHeaderButtonColor =
    scrollY < 290
      ? "text-[#FFFFFF] border-none bg-[#0B0014] "
      : "text-[#FFFFFF] border-none bg-[#0B6E4F]";

  return (
    <div
      className={`fixed top-[0%] left-[0%] ${isAuthHeaderColor} flex items-center justify-between transition-colors ease-in-out duration-700    w-full p-4 border-b-[1px] z-50 border-[black] ${margineX} ${changeHeaderColor}`}
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
          <div className={`flex ${isAuthenticated ? "visible" : "hidden"}`}>
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
