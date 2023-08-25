const About: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#2D2D2A] py-10">
      <div className="container mx-auto  pt-10">
        <div className="flex flex-col w-[500px]">
          <p className="text-white text-6xl font-fontSans w-72 ">
            Everyone has a story to tell.
          </p>
          <p className="text-white text-xl font-Lato   mt-6">
            BLOGPlastic is a home for human stories and ideas. Here, anyone can
            share insightful perspectives, useful knowledge, and life wisdom
            with the world—without building a mailing list or a following first.
            The internet is noisy and chaotic; BLOGPlastic is quiet yet full of
            insight. It’s simple, beautiful, collaborative, and helps you find
            the right audience for whatever you have to say. We believe that
            what you read and write matters. Words can divide or empower us,
            inspire or discourage us.
          </p>
          <p className="text-white text-xl font-Lato mt-6 ">
            In a world where the most sensational and surface-level stories
            often win, we’re building a system that rewards depth, nuance, and
            time well spent. A space for thoughtful conversation more than
            drive-by takes, and substance over packaging.
          </p>
        </div>
        <p className="text-white text-2xl  font-Lato mt-4 w-[550px] ">
          <span className="bg-[#72726E]">
            Ultimately, our goal is to deepen our collective{" "}
          </span>{" "}
          <span className="bg-[#72726E]">
            understanding of the world through the power of
          </span>{" "}
          <span className="bg-[#72726E]">writing.</span>
        </p>
      </div>
    </div>
  );
};
export default About;
