import BlogItem from "../item";
import { useMiddleContent } from "./hooks/useMiddleContetn";

const MiddleContent = () => {
  const { blogs } = useMiddleContent();
  return (
    <div className="p-2">
      {blogs.map((items: any, index: any) => {
        return (
          <BlogItem
            key={index}
            username={items.username}
            userPhoto={items.avatar}
            title={items.title}
            text={items.text}
            uploadDate={items.uploadDate}
            blogThumbnail={items.thumbnail}
            category={items.category}
            trendNumber=""
          />
        );
      })}
    </div>
  );
};

export default MiddleContent;
