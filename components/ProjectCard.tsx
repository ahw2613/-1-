import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/project/${project.slug}`} className="project-card">
      <div className="project-image placeholder-image">
        <div className="placeholder-inner">
          <span>LUMINOUS DESIGN</span>
          <small>PROJECT IMAGE</small>
        </div>
        <div className="project-hover">{project.apartment}</div>
      </div>
      <div className="project-card-meta">
        <strong>{project.apartment} {project.area}평</strong>
        <span>{project.city} {project.district}</span>
      </div>
    </Link>
  );
}
