import UserDropDown from "../dropDown";

import { Link } from "react-router-dom";

const AuthHeader: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <Link to="/new-story">
        <div className="flex items-center justify-center text-[#C0C0C4] hover:text-[#DFDFE1] cursor-pointer">
          <span className="material-symbols-outlined  mt-1">add</span>
          <p className="font-Lore text-center  w-10 h-5  ">Write</p>
        </div>
      </Link>

      <UserDropDown />
    </div>
  );
};

export default AuthHeader;
