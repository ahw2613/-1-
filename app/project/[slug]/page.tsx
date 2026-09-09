import Link from "next/link";
import { notFound } from "next/navigation";
import ImageMap from "@/components/ImageMap";
import { projects } from "@/data/projects";

export function generateStaticParams() { return projects.map((p) => ({ slug: p.slug })); }

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  return <main className="detail-page">
    <section className="detail-title"><p className="eyebrow">{project.city} · {project.district}</p><h1>{project.squareNumber}</h1><p>{project.apartment} {project.area}평</p></section>
    <section className="detail-main-image placeholder-image"><div className="placeholder-inner"><span>{project.apartment}</span><small>대표 이미지 업로드 영역</small></div></section>
    <section className="detail-info"><div className="detail-copy"><p className="eyebrow">PROJECT STORY</p><h2>{project.introTitle}</h2><p className="detail-subtitle">{project.introSubtitle}</p><div className="story-text">{project.description.map((text, i) => <p key={i}>{text}</p>)}</div></div><div className="construction"><p className="eyebrow">CONSTRUCTION INFO</p>{Object.entries(project.construction).map(([key, value]) => <div className="info-row" key={key}><span>{key}</span><strong>{value}</strong></div>)}</div></section>
    <ImageMap project={project} />
    <section className="detail-gallery">{project.images.map((_, i) => <div className="gallery-placeholder placeholder-image" key={i}><span>IMAGE {String(i + 1).padStart(2, "0")}</span></div>)}</section>
    <section className="detail-cta"><p className="eyebrow">FOR YOUR HOME</p><h2>{project.area >= 40 ? "Start Your Home" : "Start Your kitchen"}</h2><p>당신만의 공간을 상상해보세요.</p><span>온라인으로 컨설팅 예약 후 방문 상담을 받아볼 수 있습니다.</span><Link href="/contact">컨설팅 예약하기 <b>↗</b></Link></section>
  </main>;
}
