import { useUser } from "./hooks/useUser";
import LogoIcon from "../../assets/logo.svg";
import { Header } from "antd/es/layout/layout";
import BlogItem from "../../components/item";

const UserProfile = () => {
  const { userInfo } = useUser();
  return (
    <div className="h-screen w-full container mx-auto bg-[#FFFFFF] ">
      <div className="grid grid-cols-12 gap-1">
        <div className="mt-8 p-4 col-span-7 pt-20">
          <p className="font-[Roboto] text-4xl font-bold mb-5 p-2">
            {userInfo.fullName}
          </p>
          <BlogItem
            title="Thank You to America’s Librarians for Protecting Our Freedom to Read"
            username="Barack Obama"
            userPhoto={""}
            uploadDate="Jul 29"
            trendNumber={""}
          />
        </div>
        <div className="col-span-5 border-[#EFE7DA] border-l-[1px] h-[500px] pt-20 ">
          <div className="py-8 px-5">
            <img
              src={LogoIcon}
              alt="profile picture"
              className="w-20 h-20 rounded-full border-2 mb-5"
            />
            <p className="font-[Roboto] text-xl font-bold">
              {userInfo.fullName}
            </p>
            <p className="text-[#95C623] hover:text-[#002626] text-xs cursor-pointer mt-2">
              Edit profile
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
