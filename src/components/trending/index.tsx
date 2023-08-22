import BlogItem from "../item";

import obamaProfile from "../../assets/photos/obama.png";
import Wheaton from "../../assets/photos/wheaton.png";

const Trending: React.FC = () => {
  return (
    <div className="p-2 w-full border-b-[1px] border-[#EDEDE9] rounded-sm">
      <div className="flex">
        <span className="material-symbols-outlined flex items-center justify-center">
          trending_up
        </span>
        <p className="m-2 text-lg font-Roboto">Trending on Plastic</p>
      </div>

      <div className="grid grid-rows-2 grid-flow-col gap-1 ">
        <BlogItem
          title="Thank You to America’s Librarians for Protecting Our Freedom to Read"
          username="Barack Obama"
          userPhoto={obamaProfile}
          uploadDate="Jul 29"
          trendNumber="01"
        />
        <BlogItem
          title="My sister and I were abused and exploited on the set of The Curse. Our parents did not..."
          username="Wil Wheaton"
          userPhoto={Wheaton}
          uploadDate="Jul 16"
          trendNumber="02"
        />
        <BlogItem
          title="Thank You to America’s Librarians for Protecting Our Freedom to Read"
          username="Barack Obama"
          userPhoto={obamaProfile}
          uploadDate="Jul 29"
          trendNumber="03"
        />
        <BlogItem
          title="Once Bitten"
          username="M.G. Siegler"
          userPhoto={""}
          uploadDate="Jul 24"
          trendNumber="04"
        />
        <BlogItem
          title="Microsoft Just Showed us the Future of ChatGPT with LongNet"
          username="Ignacio de Gregorio"
          userPhoto={""}
          uploadDate="Jul 20"
          trendNumber="05"
        />
        <BlogItem
          title="Thank You to America’s Librarians for Protecting Our Freedom to Read"
          username="Barack Obama"
          userPhoto={obamaProfile}
          uploadDate="Jul 29"
          trendNumber="06"
        />
      </div>
    </div>
  );
};

export default Trending;
