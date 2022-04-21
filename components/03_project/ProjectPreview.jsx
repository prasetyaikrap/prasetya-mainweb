//utils
import { dataProject } from "../../utils/data/project";
//Components
import { ProjectCardPreview } from "./ProjectCard";

export default function ProjectPreview() {
  return (
    <section className="projectPreviewSection">
      <h1>PROJECT SHOWCASE</h1>
      <div className="projectPreviewContainer">
        {dataProject.map((project) => {
          return (
            <ProjectCardPreview
              key={project.id}
              projectTitle={project.title}
              projectHashtag={project.hashtag}
              projectImageUrl={project.image.imageUrl}
              projectImageAlt={project.image.imageAlt}
              projectDesc={project.desc}
              projectBtn={project.projectBtn}
            />
          );
        })}
      </div>
    </section>
  );
}
