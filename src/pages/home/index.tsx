import MiddleContent from "../../components/middleContent";
import SideContent from "../../components/sideContent";
import TopContent from "../../components/topContent";
import Trending from "../../components/trending";

const Home = (): JSX.Element => {
  return (
    <div className="h-screen w-full">
      <div className="pt-14">
        <TopContent />
      </div>

      <div className="container mx-auto bg-[#FFFFFF]">
        <Trending />
        <div className="grid grid-cols-5 gap-1 pt-14">
          <div className="col-span-3">
            <MiddleContent />
          </div>
          <div className="col-span-2">
            <SideContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
