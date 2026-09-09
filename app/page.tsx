import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { siteConfig } from "@/lib/site";

export default function Home() {
  const featured = projects.slice(0, 6);
  const instagram = [projects[0].image, projects[1].image, projects[4].image];
  return <main>
    <section className="home-hero"><div className="hero-video-frame"><video autoPlay muted loop playsInline poster={projects[0].image} aria-label="LUMINOUS DESIGN 공간 영상"><source src="/media/hero.mp4" type="video/mp4" /></video><div className="hero-fallback"><span>LUMINOUS</span><strong>DESIGN</strong><p>SPACE · DETAIL · LIFE</p></div></div></section>

    <section className="section section-projects">
      <div className="section-heading"><h2>아파트 패키지</h2><Link href="/project">더보기 <span>+</span></Link></div>
      <div className="home-project-grid">{featured.map((p) => <ProjectCard key={p.slug} project={p} />)}</div>
    </section>

    <section className="section news-section">
      <div className="section-heading"><h2>소식을 전합니다</h2></div>
      <div className="news-grid">
        <div className="youtube-column">
          <a href={siteConfig.youtube} target="_blank" rel="noreferrer" className="news-channel-title"><span className="social-icon">▶</span><span>YouTube</span><b>↗</b></a>
          <a href={siteConfig.youtube} target="_blank" rel="noreferrer" className="youtube-feed"><div className="feed-wrap"><img className="feed-image" src={projects[5].image} alt="LUMINOUS DESIGN YouTube 임시 이미지" loading="lazy" /><div className="play-button">▶</div></div><div className="feed-label"><span>LUMINOUS DESIGN / SPACE FILM</span><b>↗</b></div></a>
        </div>
        <div className="instagram-column">
          <a href={siteConfig.instagram} target="_blank" rel="noreferrer" className="news-channel-title"><span className="social-icon">◎</span><span>Instagram</span><b>↗</b></a>
          <div className="instagram-grid">{instagram.map((src, i) => <a href={siteConfig.instagram} target="_blank" rel="noreferrer" key={src} className="social-feed"><div className="feed-wrap"><img className="feed-image" src={src} alt={`LUMINOUS DESIGN Instagram ${i + 1}`} loading="lazy" /></div><div className="feed-label"><span>Instagram / {String(i + 1).padStart(2, "0")}</span><b>↗</b></div></a>)}</div>
        </div>
      </div>
    </section>
  </main>;
}
