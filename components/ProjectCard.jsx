function ProjectCard(props) {
  return (
    <div className={props.CSSprojectCard}>
      <h2 className={props.CSSprojectTitle}>{props.projectTitle}</h2>
      <div className={props.CSSprojectHashtag}>
        {props.projectHashtag.map((hashtag) => {
          return <span>{hashtag}</span>;
        })}
      </div>
      <div className={props.CSSprojectBody}>
        <img src={props.projectImageUrl} alt={props.projectImageAlt} />
        <p>{props.projectDesc}</p>
      </div>
      <button className={props.CSSprojectBtn}>{props.projectBtn}</button>
    </div>
  );
}

export default ProjectCard;
