import { Link } from "react-router-dom";

const Topics: React.FC<{ category: string }> = ({ category }) => {
  return (
    <Link to={`/category/${category}`}>
      <div className="text-[#141415] bg-[#F5F5F5] w-fit text-xs m-2 p-2 rounded-full cursor-pointer">
        {category}
      </div>
    </Link>
  );
};

export default Topics;
