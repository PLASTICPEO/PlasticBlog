import { MenuProps } from "antd";
import { Dropdown } from "antd";
import { useDropDown } from "./hooks/useDropDown";
import { Link, useParams } from "react-router-dom";
import {
  DownOutlined,
  UserOutlined,
  LogoutOutlined,
  FormOutlined,
} from "@ant-design/icons";

import obama from "../../../assets/photos/obama.png";

const UserDropDown: React.FC = () => {
  const { onClick } = useDropDown();

  const items: MenuProps["items"] = [
    {
      label: (
        <Link to={`/user-profile`} className="flex items-center">
          <UserOutlined className="mr-1" />
          <p>Profile</p>
        </Link>
      ),
      key: "1",
    },
    {
      label: (
        <Link to="/write" className="flex items-center">
          <FormOutlined className="mr-1" />
          <p>Write</p>
        </Link>
      ),
      key: "2",
    },
    {
      label: (
        <Link to="/" className="flex items-center">
          <LogoutOutlined className="mr-1" />
          <p>Log out</p>
        </Link>
      ),
      key: "3",
    },
  ];

  return (
    <div className="flex items-center justify-center">
      <Link to="/user-profile">
        <img
          src={obama}
          alt="profile picture"
          className="w-8 h-8 rounded-full mx-4"
        />
      </Link>

      <div className="mt-1 ">
        <Dropdown
          menu={{ items, onClick }}
          trigger={["click"]}
          className="text-[#E0E0E2] hover:text-[#EAEAEC]"
        >
          <DownOutlined />
        </Dropdown>
      </div>
    </div>
  );
};

export default UserDropDown;
