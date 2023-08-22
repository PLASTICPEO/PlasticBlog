import Topics from "../topics";
import SideBarFooter from "./footer";
const SideContent = () => {
  return (
    <div className="sticky top-20  px-20 ">
      <p className="m-2 font-Roboto">Discover more of what matters to you</p>
      <div className="flex flex-wrap">
        <Topics category="Data Science" />
        <Topics category="Writing" />
        <Topics category="Machine Learning" />
        <Topics category="Machine Learning" />
      </div>
      <p className="text-[#4D8B31] hover:text-[#002626] text-sm font-Roboto font-thin cursor-pointer mt-2 border-b-[1px] pb-5">
        See more topics
      </p>
      <SideBarFooter />
    </div>
  );
};

export default SideContent;
