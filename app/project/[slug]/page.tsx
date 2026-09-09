import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ImageMap from "@/components/ImageMap";
import { projects } from "@/data/projects";

export function generateStaticParams() { return projects.map((p) => ({ slug: p.slug })); }

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  return project ? { title: `${project.apartment} ${project.area}평`, description: `${project.city} ${project.district} ${project.apartment} ${project.area}평 ${project.title} 프로젝트.` } : {};
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();
  return <main className="detail-page">
    <section className="detail-title"><p className="eyebrow">{project.city} · {project.district} · {project.neighborhood}</p><h1>{project.squareNumber}</h1><p>{project.apartment} {project.area}평</p></section>
    <section className="detail-main-image"><img src={project.image} alt={`${project.apartment} 대표 인테리어`} /></section>
    <section className="detail-info"><div className="detail-copy"><p className="eyebrow">PROJECT STORY</p><h2>{project.introTitle}</h2><p className="detail-subtitle">{project.introSubtitle}</p><div className="story-text">{project.description.map((text, i) => <p key={i}>{text}</p>)}</div></div><div className="construction"><p className="eyebrow">CONSTRUCTION INFO</p>{Object.entries(project.construction).map(([key, value]) => <div className="info-row" key={key}><span>{key}</span><strong>{value}</strong></div>)}</div></section>
    <ImageMap project={project} />
    <section className="detail-gallery">{project.images.map((src, i) => <div className="gallery-image" key={src}><img src={src} alt={`${project.apartment} 공간 이미지 ${i + 1}`} loading="lazy" /></div>)}</section>
    <section className="detail-cta"><p className="eyebrow">FOR YOUR SPACE</p><h2>{project.type === "commercial" ? "Start Your Space" : project.spaces.includes("주방") && project.area < 40 ? "Start Your kitchen" : "Start Your Home"}</h2><p>{project.type === "commercial" ? "당신만의 공간을 상상해보세요." : project.spaces.includes("주방") && project.area < 40 ? "당신만의 주방을 상상해보세요." : "당신만의 집을 상상해보세요."}</p><span>온라인으로 컨설팅 예약 후 방문 상담을 받아볼 수 있습니다.</span><Link href="/contact">컨설팅 예약하기 <b>↗</b></Link></section>
  </main>;
}
