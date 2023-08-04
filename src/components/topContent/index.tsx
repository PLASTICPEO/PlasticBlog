import ship from "../../assets/photos/ship.svg";

const TopContent = () => {
  return (
    <div className="bg-[#FFC720] pl-20  h-96 flex items-center justify-between font-Roboto border-b-[1px] border-[#242038] text-[#242038]">
      <div>
         <p className="text-6xl font-lora">Stay curious.</p>
        <p className="text-xl w-[350px] mt-6 ">
          Discover stories, thinking, and expertise from writers on any topic.
        </p>
        <button className="p-4 bg-[#0B0014] w-44 rounded-3xl text-[white] mt-6">
          Start reading
        </button>
      </div>
      <div>
        <img src={ship} alt="" />
      </div>
    </div>
  );
};

export default TopContent;
