import { ItemTypes } from "./item.types";
import logo from "../../assets/logo.svg";

const BlogItem: React.FC<ItemTypes> = ({
  title,
  text,
  username,
  userPhoto,
  uploadDate,
  trendNumber,
  blogThumbnail,
  category,
}) => {
  return (
    <div className="flex bg-[#FFFFFF] rounded-sm font-Roboto">
      <div className="h-full text-3xl text-[#D4D8D8]">
        <p className="p-2">{trendNumber}</p>
      </div>
      <div className="p-3">
        <div>
          <div className="flex items-center">
            <img
              className="w-5 h-5 rounded-full "
              src={userPhoto ? userPhoto : logo}
              alt="profile picture"
            />
            <p className="ml-2 text-sm font-thin">{username}</p>
          </div>
          <div>
            <p className="font-extrabold leading-4 mt-2">{title}</p>
            <p className="text-[#AEAEAD] text-sm ">{text}</p>
          </div>

          <div className="flex">
            <p className="text-xs text-[#D4D8D8] py-1">{uploadDate}</p>
            {category ? (
              <div className="flex">
                <p className="text-xs text-[#D4D8D8] mx-1 p-1">·</p>
                <p className="text-xs bg-[#F5F5F5] text-[#AEAEAD] rounded-xl text-center jusitfy-center w-20 p-1">
                  {category}
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div className="w-48 h-36 p-2">
        <img src={blogThumbnail} alt="" />
      </div>
    </div>
  );
};

export default BlogItem;
