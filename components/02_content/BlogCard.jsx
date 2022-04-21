//utils
import Link from "next/link";

export function BlogCardPreview(props) {
  const blogData = props.blogData.slice(0, 4);
  console.log(blogData);
  const cardGenerated = blogData.map((content) => {
    return (
      <div className="cardBoxPreview" key={content.id}>
        <div className="blogDetailsPreview">
          <a
            href="https://www.google.com"
            className="bodyTitle fontBlack blogTitle"
          >
            {content.title}
          </a>
          <p className="bodyText fontBlack01 blogDescription">
            {content.subtitle}
          </p>
          <div className="smallText fontBlack03 blogInfo">
            <span>{content.title}</span>
            <span>{content.title}</span>
            <span>{content.title}</span>
          </div>
        </div>
        <div className="blogImagePreview"></div>
      </div>
    );
  });
  return (
    <>
      {cardGenerated}
      <Link href="https://www.socketspace.com">
        <div className="seeMoreBtn bodyText">More</div>
      </Link>
    </>
  );
}
