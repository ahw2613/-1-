import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { siteConfig } from "@/lib/site";

export default function Home() {
  const featured = projects.slice(0, 6);
  const instagram = [projects[0].image, projects[1].image, projects[4].image];
  return <main>
    <section className="home-hero"><div className="hero-video-frame"><video autoPlay muted loop playsInline poster={projects[0].image} aria-label="LUMINOUS DESIGN 공간 영상"><source src="/media/hero.mp4" type="video/mp4" /></video><div className="hero-fallback"><span>LUMINOUS</span><strong>DESIGN</strong><p>SPACE · DETAIL · LIFE</p></div></div></section>
    <section className="section section-projects"><div className="section-heading"><h2>아파트 패키지</h2><Link href="/project">더보기 <span>+</span></Link></div><div className="home-project-grid">{featured.map((p) => <ProjectCard key={p.slug} project={p} />)}</div></section>
    <section className="section news-section">
      <div className="section-heading"><h2>소식을 전합니다</h2></div>
      <div className="news-grid">
        <div className="youtube-column">
          <a href={siteConfig.youtube} target="_blank" rel="noreferrer" className="news-channel-title"><span className="social-icon">▶</span><span>YouTube</span><b>↗</b></a>
          <a href={siteConfig.youtube} target="_blank" rel="noreferrer" className="youtube-feed"><div className="feed-wrap"><img className="feed-image" src={projects[5].image} alt="LUMINOUS DESIGN YouTube 임시 이미지" loading="lazy" /><div className="play-button">▶</div></div><div className="feed-label"><span>LUMINOUS DESIGN / SPACE FILM</span><b>↗</b></div></a>
        </div>
        <div className="instagram-column">
          <a href={siteConfig.instagram} target="_blank" rel="noreferrer" className="news-channel-title"><span className="social-icon">◎</span><span>Instagram</span><b>↗</b></a>
          <div className="instagram-grid">{instagram.map((src, i) => <a href={siteConfig.instagram} target="_blank" rel="noreferrer" key={`${src}-${i}`} className="social-feed"><div className="feed-wrap"><img className="feed-image" src={src} alt={`LUMINOUS DESIGN Instagram ${i + 1}`} loading="lazy" /></div><div className="feed-label"><span>Instagram / {String(i + 1).padStart(2, "0")}</span><b>↗</b></div></a>)}</div>
        </div>
      </div>
      <style>{` .news-grid{align-items:start}.news-channel-title{display:grid;grid-template-columns:26px 1fr auto;align-items:center;gap:8px;padding-bottom:18px;font-size:15px;border-bottom:1px solid var(--line);margin-bottom:18px}.news-channel-title b{font-weight:400;color:#777}.social-icon{font-size:17px;line-height:1}.instagram-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}.play-button{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:54px;height:54px;border:1px solid rgba(255,255,255,.85);border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:14px;background:rgba(0,0,0,.18);padding-left:3px}.youtube-feed .feed-wrap{position:relative;aspect-ratio:16/9}.instagram-column .social-feed .feed-wrap{aspect-ratio:4/3}.instagram-column .feed-label{font-size:11px}.youtube-column .feed-label{font-size:13px}@media(max-width:1000px){.news-grid{grid-template-columns:1fr}.instagram-grid{grid-template-columns:repeat(3,1fr);gap:10px}}@media(max-width:560px){.instagram-grid{gap:7px}.news-channel-title{font-size:14px}} `}</style>
    </section>
  </main>;
}
