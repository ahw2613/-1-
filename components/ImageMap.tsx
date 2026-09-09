"use client";

import { useState } from "react";
import type { Project } from "@/data/projects";

export default function ImageMap({ project }: { project: Project }) {
  const [active, setActive] = useState<number | null>(null);
  return <section className="image-map-section">
    <div className="image-map"><img src={project.image} alt={`${project.apartment} 공간 상세 이미지`} />
      {project.hotspots.map((spot, index) => <button key={spot.title} className={`hotspot ${active === index ? "active" : ""}`} style={{ left: `${spot.x}%`, top: `${spot.y}%` }} onClick={() => setActive(active === index ? null : index)} aria-label={`${spot.title} 정보 보기`}>+</button>)}
      {active !== null && <div className="hotspot-panel"><button onClick={() => setActive(null)} aria-label="정보 닫기">×</button><span>{project.hotspots[active].title}</span><p>{project.hotspots[active].detail}</p></div>}
    </div>
  </section>;
}
