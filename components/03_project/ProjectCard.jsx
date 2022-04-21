export function ProjectCardPreview(props) {
  return (
    <div className="projectCard">
      <h3 className="projectCardTitle">{props.projectTitle}</h3>
      <div className="projectCardHashtag smallText">
        {props.projectHashtag.map((hashtag) => {
          return <span>#{hashtag}</span>;
        })}
      </div>
      <div className="projectCardBody">
        <img src={props.projectImageUrl} alt={props.projectImageAlt} />
        <p className="bodyText">{props.projectDesc}</p>
      </div>
      <button className="projecCardtBtn buttonText">{props.projectBtn}</button>
    </div>
  );
}
