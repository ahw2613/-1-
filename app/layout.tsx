import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "LUMINOUS DESIGN | 광주 인테리어", template: "%s | LUMINOUS DESIGN" },
  description: siteConfig.description,
  keywords: ["광주인테리어", "광주 인테리어", "광주 아파트 인테리어", "주거공간 인테리어", "상업공간 인테리어", "루미너스 디자인"],
  alternates: { canonical: "/" },
  openGraph: { title: "LUMINOUS DESIGN", description: siteConfig.description, type: "website", locale: "ko_KR", siteName: "LUMINOUS DESIGN" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = { "@context": "https://schema.org", "@type": "LocalBusiness", name: siteConfig.name, description: siteConfig.description, url: siteConfig.url, email: siteConfig.email, telephone: siteConfig.phone, address: { "@type": "PostalAddress", addressLocality: "광주광역시", addressCountry: "KR" } };
  return <html lang="ko"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><Header />{children}</body></html>;
}
