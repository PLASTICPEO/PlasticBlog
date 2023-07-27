import ship from "../../assets/photos/ship.svg";

const TopContent = () => {
  return (
    <div className="bg-[#5295CB] pl-20  h-96 flex items-center justify-between font-Roboto border-b-[1px] border-[#0A0A0B]">
      <div>
         <p className="text-6xl font-lora">Stay curious.</p>
        <p className="text-xl w-[350px] mt-6 ">
          Discover stories, thinking, and expertise from writers on any topic.
        </p>
        <button className="p-4 bg-[black] w-[200px] rounded-3xl text-[white] mt-6">
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
