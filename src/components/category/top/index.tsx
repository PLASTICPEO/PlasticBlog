import { useParams } from "react-router-dom";

const CategoryTopContent = () => {
  const { topic } = useParams();
  return (
    <div className="flex items-center justify-center w-full h-96 bg-[#FFFFFF] border-b-[1px]">
      <div className="text-center">
        <p className="text-center mb-4 text-4xl font-bold font-Roboto">
          {topic}
        </p>
        <div className="flex text-[#8F8F8F] font-light">
          <p className="mr-2">Topic</p>
          <span className="mr-2 ">&#x2022;</span>
          <p className="mr-2">2.8M Followers</p>
          <span className="mr-2">&#x2022;</span>
          <p>388K Stories</p>
        </div>
        <button className="px-4 py-2 m-2 text-sm text-[#FFFFFF] font-thin bg-[#111218] hover:bg-[#212430] rounded-full">
          Follow
        </button>
      </div>
    </div>
  );
};

export default CategoryTopContent;
