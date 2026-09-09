import type { Metadata } from "next";
import ProjectBrowser from "@/components/ProjectBrowser";
import { projects } from "@/data/projects";

export const metadata: Metadata = { title: "PROJECT | 주거공간 · 상업공간", description: "루미너스 디자인의 광주 주거공간·상업공간 프로젝트 포트폴리오." };

export default function ProjectPage() {
  return <main className="sub-page"><section className="page-intro"><p className="eyebrow">LUMINOUS DESIGN / PROJECT</p><h1>PROJECT</h1><p>공간의 구조와 생활의 방식을 함께 살피며 완성한 프로젝트입니다.</p></section><section className="project-browser-wrap"><ProjectBrowser projects={projects} /></section></main>;
}
