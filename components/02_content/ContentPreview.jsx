//utils
import { blogData } from "../../utils/data/blog";

//Component
import { BlogCardPreview } from "./BlogCard";
import { SocmedCardPreview } from "./SocmedCard";
//CSS
export default function ContentPreview() {
  return (
    <section className="contentSection">
      <h1>Explore New Insight</h1>
      <div className="contentBox">
        <div className="blogPreviewBox">
          <BlogCardPreview blogData={blogData} />
        </div>
        <div className="socmedPreviewBox">
          <SocmedCardPreview />
        </div>
      </div>
    </section>
  );
}
