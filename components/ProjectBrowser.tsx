"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import type { Project } from "@/data/projects";

export default function ProjectBrowser({ projects }: { projects: Project[] }) {
  const searchParams = useSearchParams();
  const typeParam = searchParams.get("type");
  const [mode, setMode] = useState<"project" | "space">("project");
  const [area, setArea] = useState("all");
  const [space, setSpace] = useState("all");
  const [query, setQuery] = useState("");

  const source = useMemo(() => typeParam === "commercial" ? projects.filter((p) => p.type === "commercial") : typeParam === "residential" ? projects.filter((p) => p.type === "residential") : projects, [projects, typeParam]);
  const spaces = useMemo(() => Array.from(new Set(source.flatMap((p) => p.spaces))), [source]);
  const filtered = source.filter((p) => {
    const q = query.trim().toLowerCase();
    const matchesQuery = !q || [p.title, p.city, p.district, p.neighborhood, p.apartment, p.squareNumber].join(" ").toLowerCase().includes(q);
    const matchesArea = area === "all" || (area === "30" ? p.area < 40 : area === "40" ? p.area >= 40 && p.area < 50 : p.area >= 50);
    const matchesSpace = space === "all" || p.spaces.includes(space);
    return matchesQuery && matchesArea && (mode === "project" || matchesSpace);
  });

  return <>
    <div className="project-controls">
      <div className="view-toggle">
        <button className={mode === "project" ? "selected" : ""} onClick={() => setMode("project")}>프로젝트별로 보기</button>
        <button className={mode === "space" ? "selected" : ""} onClick={() => setMode("space")}>세부공간별로 보기</button>
      </div>
      <div className="filter-row">
        <div className="filter-buttons">
          {[["all", "전체"], ["30", "30평대"], ["40", "40평대"], ["50", "50평 이상"]].map(([value, label]) => <button key={value} className={area === value ? "selected" : ""} onClick={() => setArea(value)}>{label}</button>)}
        </div>
        {mode === "space" && <select value={space} onChange={(e) => setSpace(e.target.value)} aria-label="세부공간 선택"><option value="all">전체 공간</option>{spaces.map((s) => <option value={s} key={s}>{s}</option>)}</select>}
        <label className="search-field"><span aria-hidden="true">⌕</span><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="아파트명(지역명) 또는 스퀘어 넘버를 검색해보세요." /></label>
      </div>
    </div>
    <div className="portfolio-grid">
      {filtered.map((project) => <Link href={`/project/${project.slug}`} className="portfolio-item" key={project.slug}>
        <div className="portfolio-image"><img src={project.image} alt={`${project.apartment} ${project.area}평`} loading="lazy" /><div className="project-hover">{project.apartment}</div></div>
        <div className="portfolio-caption"><strong>{project.apartment}</strong><span>{project.city} {project.district} {project.neighborhood} · {project.area}평</span></div>
      </Link>)}
      {!filtered.length && <div className="empty-result">검색 결과가 없습니다.</div>}
    </div>
  </>;
}
