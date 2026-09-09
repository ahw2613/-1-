export const siteConfig = {
  name: "LUMINOUS DESIGN",
  description: "광주를 중심으로 주거공간과 상업공간을 설계하는 루미너스 디자인.",
  url: "https://luminous-design.vercel.app",
  email: "hello@luminousdesign.kr",
  phone: "상담 시 안내",
  address: "광주광역시 · 주소 준비 중",
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
