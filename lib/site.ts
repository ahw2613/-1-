export const siteConfig = {
  name: "LUMINOUS DESIGN",
  description: "광주를 기반으로 주거공간과 상업공간을 설계하고 완성하는 루미너스 디자인.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://luminous-design.vercel.app",
  email: "hello@luminousdesign.kr",
  phone: "상담 시 안내",
  address: "광주광역시 · 방문 상담은 사전 예약제로 운영됩니다.",
  instagram: "https://www.instagram.com/",
  youtube: "https://www.youtube.com/",
};

export const navItems = [
  { label: "PROJECT", href: "/project", children: [
    { label: "주거공간", href: "/project?type=residential" },
    { label: "상업공간", href: "/project?type=commercial" },
  ]},
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT", href: "/contact" },
];
