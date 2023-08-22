import MiddleContent from "../../components/middleContent";
import SideContent from "../../components/sideContent";

const AuthorizedPage = () => {
  return (
    <div className="h-screen w-full ">
      <div className="container mx-auto bg-[#FFFFFF] mt-18">
        <div className="grid grid-cols-12 gap-1 pt-14">
          <div className="col-span-7">
            <MiddleContent />
          </div>
          <div className="col-span-5">
            <SideContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorizedPage;
