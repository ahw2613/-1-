import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = { title: "ABOUT", description: "루미너스 디자인의 철학과 작업 방식." };

export default function AboutPage() {
  return <main className="sub-page about-page"><section className="page-intro"><p className="eyebrow">LUMINOUS DESIGN / ABOUT</p><h1>ABOUT</h1><p>빛나는 일상을 위한 공간을 설계합니다.</p></section><section className="about-story"><p className="about-lead">LUMINOUS DESIGN은 공간의 표면보다 그 안에서 이어질 생활을 먼저 생각합니다.</p><div className="about-columns"><div><p>집의 구조, 가족의 동선, 좋아하는 물건과 오래 머무는 시간까지 세심하게 관찰합니다. 유행하는 장면을 만드는 것보다 시간이 지나도 자연스럽게 어울리는 공간을 만드는 일을 중요하게 생각합니다.</p></div><div><p>주거공간과 상업공간을 아우르며 기획부터 디자인, 시공의 디테일까지 하나의 흐름으로 연결합니다. 광주를 기반으로 지역의 생활 방식과 공간의 맥락을 이해하는 디자인을 지향합니다.</p></div></div></section><section className="about-location"><div><p className="eyebrow">VISIT US</p><h2>Studio</h2><p>{siteConfig.address}</p><p>방문 상담은 사전 예약제로 운영됩니다.</p></div><div className="map-placeholder">MAP<br /><small>정확한 주소 확정 후 지도 연동</small></div></section></main>;
}
