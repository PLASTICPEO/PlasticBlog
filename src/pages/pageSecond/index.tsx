import CustomModal from "../../components/modal";

const SecondPage = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center flex-col bg-[#F9F8F8]">
      <CustomModal
        title="Hi Five"
        triggerProps={{
          className: "m-2",
          buttonname: ["button", "button 1"],
        }}
      >
        <h1>Hi from second Page</h1>
      </CustomModal>
    </div>
  );
};

export default SecondPage;
