import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "LUMINOUS DESIGN | 광주 인테리어", template: "%s | LUMINOUS DESIGN" },
  description: siteConfig.description,
  keywords: ["광주인테리어", "광주 인테리어", "광주 아파트 인테리어", "광주 상업공간 인테리어", "주거공간 인테리어", "상업공간 인테리어", "루미너스 디자인", "광주 리모델링"],
  alternates: { canonical: "/" }, robots: { index: true, follow: true },
  openGraph: { title: "LUMINOUS DESIGN | 광주 인테리어", description: siteConfig.description, type: "website", locale: "ko_KR", siteName: "LUMINOUS DESIGN" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = { "@context": "https://schema.org", "@type": "LocalBusiness", name: siteConfig.name, description: siteConfig.description, url: siteConfig.url, email: siteConfig.email, telephone: siteConfig.phone, areaServed: ["광주광역시", "전라남도"], knowsAbout: ["광주 인테리어", "아파트 인테리어", "주거공간 디자인", "상업공간 디자인", "주방 인테리어"], address: { "@type": "PostalAddress", addressLocality: "광주광역시", addressCountry: "KR" } };
  return <html lang="ko"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><Header />{children}<footer className="site-footer"><div>LUMINOUS DESIGN</div><span>SPACE · DETAIL · LIFE</span><style>{`.site-footer{max-width:1600px;margin:auto;padding:34px 42px 42px;border-top:1px solid var(--line);display:flex;justify-content:space-between;font-size:11px;letter-spacing:.12em}.site-footer span{color:#999}@media(max-width:560px){.site-footer{padding:25px 18px 30px;display:block}.site-footer span{display:block;margin-top:8px}}`}</style></footer></body></html>;
}
