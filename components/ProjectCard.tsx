import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/project/${project.slug}`} className="project-card">
      <div className="project-image">
        <img src={project.image} alt={`${project.apartment} ${project.area}평 ${project.title}`} loading="lazy" />
        <div className="project-hover">{project.apartment}</div>
      </div>
      <div className="project-card-meta">
        <strong>{project.apartment} {project.area}평</strong>
        <span>{project.city} {project.district} {project.neighborhood}</span>
      </div>
    </Link>
  );
}
