import CustomModal from "../modal";
import LogInContent from "../header/login";
import ship from "../../assets/photos/ship.svg";

import { useTopContetn } from "./hooks/useTopContent";

const TopContent: React.FC = () => {
  const { handleLogin, loginRef } = useTopContetn();
  return (
    <div className="bg-[#A4C794] pl-20 mt-4 w-full  h-[500px] flex items-center justify-between font-Roboto border-b-[1px] border-[#242038] text-[#242038]">
      <div className="flex flex-col justify-center">
         
        <p className="xl:text-8xl text-2xl font-lora text-[black]">
          Stay curious.
        </p>
        <p className="xl:text-xl text-lg w-wrap mt-6 ">
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
        <img src={ship} alt="" className="xl:visible invisible" />
      </div>
    </div>
  );
};

export default TopContent;
