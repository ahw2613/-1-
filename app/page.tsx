import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { siteConfig } from "@/lib/site";

export default function Home() {
  const featured = projects.slice(0, 6);
  return <main>
    <section className="home-hero"><div className="hero-video-frame"><video autoPlay muted loop playsInline poster="/images/hero-poster.jpg"><source src="/media/hero.mp4" type="video/mp4" /></video><div className="hero-fallback"><span>LUMINOUS</span><strong>DESIGN</strong><p>SPACE · DETAIL · LIFE</p></div></div></section>
    <section className="section section-projects"><div className="section-heading"><h2>아파트 패키지</h2><Link href="/project">더보기 <span>+</span></Link></div><div className="home-project-grid">{featured.map((p) => <ProjectCard key={p.slug} project={p} />)}</div></section>
    <section className="section news-section"><div className="section-heading"><h2>소식을 전합니다</h2><div className="social-links"><a href={siteConfig.instagram} target="_blank" rel="noreferrer">Instagram <span>↗</span></a><a href={siteConfig.youtube} target="_blank" rel="noreferrer">YouTube <span>↗</span></a></div></div><div className="news-grid"><a href={siteConfig.instagram} target="_blank" rel="noreferrer" className="social-feed"><div className="feed-placeholder">INSTAGRAM / 4:3</div><span>Instagram <b>↗</b></span></a><a href={siteConfig.youtube} target="_blank" rel="noreferrer" className="youtube-feed"><div className="feed-placeholder video-placeholder">YOUTUBE</div><span>YouTube <b>↗</b></span></a></div></section>
  </main>;
}
