import MiddleContent from "../../components/middleContent";
import SideContent from "../../components/sideContent";
import TopContent from "../../components/topContent";
import Trending from "../../components/trending";

const Home: React.FC = () => {
  return (
    <div className="h-screen w-full">
      <TopContent />
      <div className="container mx-auto bg-[#FFFFFF]">
        <Trending />
        <div className="grid xl:grid-cols-12 grid-cols-1  gap-1 pt-14">
          <div className="xl:col-span-7 xl:order-1 order-2">
            <MiddleContent />
          </div>
          <div className="xl:col-span-5 xl:order-2 order-">
            <SideContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
