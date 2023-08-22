import { useState, useEffect, useRef } from "react";
const WritingPage: React.FC = () => {
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    console.log(name, value);
  };
  const textareaRef: any = useRef(null);

  useEffect(() => {
    // Focus on the textarea when the component mounts
    textareaRef.current.focus();
  }, []);

  return (
    <div className="w-full h-screen">
      <div className="container mx-auto mt-20">
        <div className="px-56 flex">
          {/* <p className="text-[#90908E] mt-8 pr-4">Title</p> */}
          <input
            onChange={handleChange}
            name="question"
            className="focus:border-l-[1px] focus:border-[#C2C2C1] p-4 outline-none m-1.5 placeholder-gray-900 placeholder:Roboto  placeholder:font-normal font-lora placeholder:text-[#C2C2C1] text-[#343232] placeholder:px-2 placeholder:text-4xl text-5xl caret-[#C2C2C1]"
            placeholder="Title"
          />
        </div>
        <div className="px-56  flex">
          <input
            ref={textareaRef}
            onChange={handleChange}
            name="question"
            className="px-4 outline-none m-1.5 placeholder-gray-900 placeholder:Roboto placeholder:font-lora font-lora placeholder:text-[#C2C2C1] text-[#343232] placeholder:text-3xl text-2xl caret-[#C2C2C1] w-[400px] min-h-[30px] overflow-hidden  bg-transparent overflow-hidden "
            placeholder="Tell yout story..."
          />
        </div>
      </div>
    </div>
  );
};
export default WritingPage;
