import ship from "../../assets/photos/ship.svg";
import { useContext, useRef } from "react";
import CustomModal from "../modal";
import LogInContent from "../header/login";
import api from "../../api/api";
import { setToken } from "../../api/api";
import { AppContext } from "../../context/ContextProvider";
import { useTopContetn } from "./hooks/useTopContent";

const TopContent: React.FC = () => {
  const { handleLogin, loginRef } = useTopContetn();
  return (
    <div className="bg-[#A4C794] pl-20 mt-4   h-[500px] flex items-center justify-between font-Roboto border-b-[1px] border-[#242038] text-[#242038]">
      <div>
         <p className="text-8xl font-lora text-[black]">Stay curious.</p>
        <p className="text-xl w-[350px] mt-6 ">
          Discover stories, thinking, and expertise from writers on any topic.
        </p>
        <CustomModal
          triggerProps={{
            className: `border-none bg-[#0B0014] w-44 rounded-3xl text-[white] mt-6`,
          }}
          buttonValue={"Start reading"}
          title="Welcome Back."
          ref={loginRef}
        >
          <LogInContent handleLogin={handleLogin} />
        </CustomModal>
      </div>
      <div>
        <img src={ship} alt="" />
      </div>
    </div>
  );
};

export default TopContent;
