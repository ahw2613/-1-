export type Project = {
  slug: string;
  title: string;
  city: string;
  district: string;
  apartment: string;
  area: number;
  type: "residential" | "commercial";
  squareNumber: string;
  introTitle: string;
  introSubtitle: string;
  image: string;
  images: string[];
  spaces: string[];
  construction: Record<string, string>;
  description: string[];
  hotspots: { x: number; y: number; title: string; detail: string }[];
};

export const projects: Project[] = [
  {
    slug: "hanguk-adellium-1-49",
    title: "휴식의 깊이가 다른 집",
    city: "광주",
    district: "남구",
    apartment: "한국아델리움 1단지",
    area: 49,
    type: "residential",
    squareNumber: "49 PY",
    introTitle: "완벽한 배경이 되는 집",
    introSubtitle: "A Quiet Background for Everyday Life",
    image: "/images/projects/hanguk-adellium-1/main.jpg",
    images: [
      "/images/projects/hanguk-adellium-1/01.jpg",
      "/images/projects/hanguk-adellium-1/02.jpg",
      "/images/projects/hanguk-adellium-1/03.jpg",
      "/images/projects/hanguk-adellium-1/04.jpg",
    ],
    spaces: ["거실", "주방", "안방", "드레스룸", "현관"],
    construction: {
      "시공월": "2026/06",
      "시공기간": "협의 후 안내",
      "공간유형": "아파트 / 한국아델리움 1단지",
      "시공범위": "공용부 및 주요 공간",
      "시공유형": "주거공간 인테리어",
    },
    description: [
      "공용부는 자연스럽게 가족들이 함께 머무르게 되는 공간입니다.",
      "구성원 누가 보아도 예쁜, 부담스럽지 않은 공간이 되어주길 바랬습니다.",
      "계절의 변화에 맞춰 가구 위치를 바꾸고 분위기에 맞는 오브제들로 집을 가꾸는 클라이언트의 라이프 스타일.",
      "그 일상을 온전히 담아내기 위해, 이번 거실은 공간을 비워내어 완벽한 배경을 만드는 데 공을 들였습니다.",
      "어떤 가구와 오브제가 놓이더라도 자연스럽게 스며드는 포근한 배경, 여기에 TV 아트월의 메지라인과 스피커를 놓을 수 있는 대리석 선반의 디테일을 더했습니다.",
      "가구가 비어 있는 순간조차 밋밋하지 않고 감각적인 여운을 남기는 공간을 완성했습니다.",
    ],
    hotspots: [
      { x: 38, y: 62, title: "대리석 선반", detail: "스피커와 오브제를 자연스럽게 놓을 수 있도록 설계한 선반입니다." },
      { x: 68, y: 44, title: "TV 아트월", detail: "세로 메지라인으로 면의 깊이와 정돈된 리듬을 만들었습니다." },
    ],
  },
  {
    slug: "baekun-luencity-1-30",
    title: "사선으로 그린 메탈 키친",
    city: "광주",
    district: "남구",
    apartment: "백운루엔시티 1차",
    area: 30,
    type: "residential",
    squareNumber: "NGJ03",
    introTitle: "사선으로 그린 메탈 키친",
    introSubtitle: "with 컨셉플레인",
    image: "/images/projects/baekun-luencity-1/main.jpg",
    images: [
      "/images/projects/baekun-luencity-1/01.jpg",
      "/images/projects/baekun-luencity-1/02.jpg",
      "/images/projects/baekun-luencity-1/03.jpg",
      "/images/projects/baekun-luencity-1/04.jpg",
    ],
    spaces: ["주방", "팬트리", "다이닝"],
    construction: {
      "시공월": "2026/06",
      "시공기간": "4일",
      "공간유형": "아파트 / DMC파크뷰자이",
      "키친타입": "Essential - Metal, Color Essential - Metal, Color",
      "상판타입": "STS 3T",
      "시공범위": "키친 공사",
      "시공유형": "인테리어 중 키친공사",
    },
    description: [
      "ㆍ Diagonal Metal Island\n공간을 가로지르는 사선형 아일랜드가 주방의 중심을 이루는 NGJ03 프로젝트 키친입니다.",
      "아일랜드 전면에는 에센셜 메탈 타입으로 과감한 사선의 조형적 형태를 선명하게 강조합니다.",
      "ㆍ Balanced Contrast\n아일랜드 안쪽과 키큰장은 에센셜 컬러의 솔트 화이트로 마감해 메탈과 자연스러운 균형을 이룹니다.",
      "김치냉장고와 냉동고, 냉장고는 키큰장에 빌트인으로 배치하여 대형 가전이 하나의 면처럼 이어지는 깔끔하고 정돈된 인상을 더합니다.",
      "ㆍ Personal Lifestyle\n평소 와인을 즐기는 라이프스타일을 반영해 와인 냉장고를 빌트인으로 구성하고, 상부에는 와인 글라스를 전시할 수 있는 오픈 선반을 더했습니다.",
      "주방의 기능적인 구성뿐 아니라 취향과 일상의 방식을 공간 곳곳에 담아 개인의 라이프스타일에 맞는 주방을 완성합니다.",
    ],
    hotspots: [
      { x: 42, y: 58, title: "사선형 아일랜드", detail: "주방을 가로지르는 사선 형태의 메탈 아일랜드입니다." },
      { x: 75, y: 40, title: "빌트인 냉장고", detail: "대형 가전을 키큰장 안으로 정리해 하나의 면처럼 연결했습니다." },
      { x: 82, y: 25, title: "와인 오픈 선반", detail: "와인 글라스와 오브제를 전시할 수 있는 오픈 선반입니다." },
    ],
  },
];

export const residentialProjects = projects.filter((p) => p.type === "residential");
export const commercialProjects = projects.filter((p) => p.type === "commercial");
