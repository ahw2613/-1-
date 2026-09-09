export type Project = {
  slug: string;
  title: string;
  city: string;
  district: string;
  neighborhood: string;
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

const interior = {
  living: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=88",
  kitchen: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1800&q=88",
  dining: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=88",
  bedroom: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1800&q=88",
  bath: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1800&q=88",
  stay: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=88",
};

export const projects: Project[] = [
  {
    slug: "hanguk-adellium-1-49",
    title: "휴식의 깊이가 다른 집",
    city: "광주",
    district: "남구",
    neighborhood: "봉선동",
    apartment: "한국아델리움 1단지",
    area: 49,
    type: "residential",
    squareNumber: "49 PY",
    introTitle: "완벽한 배경이 되는 집",
    introSubtitle: "A Quiet Background for Everyday Life",
    image: interior.living,
    images: [interior.living, interior.dining, interior.kitchen, interior.bedroom],
    spaces: ["거실", "주방", "안방", "드레스룸", "현관"],
    construction: { "시공월": "2026/06", "시공기간": "협의 후 안내", "공간유형": "아파트 / 한국아델리움 1단지", "시공범위": "공용부 및 주요 공간", "시공유형": "주거공간 인테리어" },
    description: [
      "공용부는 자연스럽게 가족들이 함께 머무르게 되는 공간입니다.\n구성원 누가 보아도 예쁜, 부담스럽지 않은 공간이 되어주길 바랬습니다.",
      "계절의 변화에 맞춰 가구 위치를 바꾸고 분위기에 맞는 오브제들로 집을 가꾸는 클라이언트의 라이프 스타일.",
      "그 일상을 온전히 담아내기 위해, 이번 거실은 공간을 비워내어 완벽한 배경을 만드는 데 공을 들였습니다.",
      "어떤 가구와 오브제가 놓이더라도 자연스럽게 스며드는 포근한 배경, 여기에 TV 아트월의 메지라인과 스피커를 놓을 수 있는 대리석 선반의 디테일을 더했습니다.",
      "가구가 비어 있는 순간조차 밋밋하지 않고 감각적인 여운을 남기는 공간을 완성했습니다.",
    ],
    hotspots: [
      { x: 37, y: 60, title: "대리석 선반", detail: "스피커와 오브제를 자연스럽게 놓을 수 있도록 설계한 선반입니다." },
      { x: 68, y: 43, title: "TV 아트월", detail: "세로 메지라인으로 면의 깊이와 정돈된 리듬을 만들었습니다." },
    ],
  },
  {
    slug: "baekun-luencity-1-30",
    title: "사선으로 그린 메탈 키친",
    city: "광주",
    district: "남구",
    neighborhood: "백운동",
    apartment: "백운루엔시티 1차",
    area: 30,
    type: "residential",
    squareNumber: "NGJ03",
    introTitle: "사선으로 그린 메탈 키친",
    introSubtitle: "with 컨셉플레인",
    image: interior.kitchen,
    images: [interior.kitchen, interior.dining, interior.living, interior.bath],
    spaces: ["주방", "팬트리", "다이닝"],
    construction: { "시공월": "2026/06", "시공기간": "4일", "공간유형": "아파트 / 백운루엔시티 1차", "키친타입": "Essential - Metal, Color Essential - Metal, Color", "상판타입": "STS 3T", "시공범위": "키친 공사", "시공유형": "인테리어 중 키친공사" },
    description: [
      "ㆍ Diagonal Metal Island\n공간을 가로지르는 사선형 아일랜드가 주방의 중심을 이루는 NGJ03 프로젝트 키친입니다.\n\n아일랜드 전면에는 에센셜 메탈 타입으로 과감한 사선의 조형적 형태를 선명하게 강조합니다.",
      "ㆍ Balanced Contrast\n아일랜드 안쪽과 키큰장은 에센셜 컬러의 솔트 화이트로 마감해 메탈과 자연스러운 균형을 이룹니다.\n\n김치냉장고와 냉동고, 냉장고는 키큰장에 빌트인으로 배치하여 대형 가전이 하나의 면처럼 이어지는 깔끔하고 정돈된 인상을 더합니다.",
      "ㆍ Personal Lifestyle\n평소 와인을 즐기는 라이프스타일을 반영해 와인 냉장고를 빌트인으로 구성하고, 상부에는 와인 글라스를 전시할 수 있는 오픈 선반을 더했습니다.\n\n주방의 기능적인 구성뿐 아니라 취향과 일상의 방식을 공간 곳곳에 담아 개인의 라이프스타일에 맞는 주방을 완성합니다.",
    ],
    hotspots: [
      { x: 42, y: 58, title: "사선형 아일랜드", detail: "주방을 가로지르는 사선 형태의 메탈 아일랜드입니다." },
      { x: 75, y: 40, title: "빌트인 냉장고", detail: "대형 가전을 키큰장 안으로 정리해 하나의 면처럼 연결했습니다." },
      { x: 82, y: 25, title: "와인 오픈 선반", detail: "와인 글라스와 오브제를 전시할 수 있는 오픈 선반입니다." },
    ],
  },
  {
    slug: "sangmu-the-mate-34",
    title: "빛을 머금은 뉴트럴 하우스",
    city: "광주", district: "서구", neighborhood: "치평동", apartment: "상무 더메이트", area: 34, type: "residential", squareNumber: "LMN34", introTitle: "빛이 오래 머무는 집", introSubtitle: "A House Filled with Quiet Light", image: interior.living, images: [interior.living, interior.bedroom, interior.kitchen, interior.bath], spaces: ["거실", "주방", "안방", "욕실"], construction: { "시공월": "2026/05", "시공기간": "협의 후 안내", "공간유형": "아파트 / 상무 더메이트", "시공범위": "전체 인테리어", "시공유형": "주거공간 인테리어" }, description: ["따뜻한 뉴트럴 톤과 자연광을 중심으로 일상의 장면이 편안하게 이어지는 공간을 구성했습니다.", "불필요한 장식을 덜어내고 소재의 질감과 비례를 선명하게 드러냈습니다."], hotspots: [{ x: 52, y: 50, title: "내추럴 월", detail: "빛의 방향에 따라 질감이 달라지는 뉴트럴 마감입니다." }] },
  {
    slug: "suwon-central-42",
    title: "선과 면으로 정리한 생활",
    city: "광주", district: "광산구", neighborhood: "수완동", apartment: "수완 센트럴", area: 42, type: "residential", squareNumber: "LMN42", introTitle: "정돈된 생활의 풍경", introSubtitle: "Lines, Planes and Everyday Life", image: interior.dining, images: [interior.dining, interior.living, interior.kitchen, interior.bedroom], spaces: ["거실", "주방", "다이닝", "안방"], construction: { "시공월": "2026/04", "시공기간": "협의 후 안내", "공간유형": "아파트 / 수완 센트럴", "시공범위": "공용부 및 주방", "시공유형": "주거공간 인테리어" }, description: ["가구와 벽면, 조명 사이의 간격을 세심하게 조율해 공간의 흐름을 정리했습니다.", "담백한 소재와 낮은 채도의 색감으로 오래 머물수록 편안한 분위기를 만들었습니다."], hotspots: [{ x: 44, y: 58, title: "다이닝 월", detail: "수납과 오브제 전시를 하나의 면으로 정리했습니다." }] },
  {
    slug: "cheomdan-forest-52",
    title: "자연의 온도를 담은 집",
    city: "광주", district: "광산구", neighborhood: "첨단동", apartment: "첨단 포레", area: 52, type: "residential", squareNumber: "LMN52", introTitle: "자연의 온도를 담다", introSubtitle: "Material, Light and Nature", image: interior.bedroom, images: [interior.bedroom, interior.living, interior.bath, interior.kitchen], spaces: ["거실", "안방", "욕실", "주방"], construction: { "시공월": "2026/03", "시공기간": "협의 후 안내", "공간유형": "아파트 / 첨단 포레", "시공범위": "전체 인테리어", "시공유형": "주거공간 인테리어" }, description: ["우드와 스톤, 패브릭의 온도를 균형 있게 배치해 차분하면서도 깊이 있는 공간을 만들었습니다.", "시간에 따라 달라지는 빛까지 공간의 재료로 바라보았습니다."], hotspots: [{ x: 55, y: 48, title: "우드 월", detail: "공간에 따뜻한 깊이를 더하는 자연스러운 우드 마감입니다." }] },
  {
    slug: "jeju-slow-stay",
    title: "머무는 시간의 밀도",
    city: "제주", district: "제주시", neighborhood: "한림읍", apartment: "슬로우 스테이", area: 38, type: "commercial", squareNumber: "STAY38", introTitle: "머무는 시간의 밀도", introSubtitle: "A Stay Made for Slow Days", image: interior.stay, images: [interior.stay, interior.living, interior.bedroom, interior.bath], spaces: ["라운지", "객실", "욕실", "테라스"], construction: { "시공월": "2026/02", "시공기간": "협의 후 안내", "공간유형": "숙박 / 제주 한림", "시공범위": "객실 및 공용부", "시공유형": "상업공간 인테리어" }, description: ["풍경을 방해하지 않는 재료와 낮은 조도의 빛으로 천천히 머물 수 있는 숙소를 설계했습니다.", "객실마다 작은 차이를 두되 전체 공간은 하나의 경험으로 이어지도록 구성했습니다."], hotspots: [{ x: 48, y: 55, title: "라운지 테이블", detail: "숙소의 풍경을 바라보며 오래 머물 수 있는 중심 공간입니다." }] },
];

export const residentialProjects = projects.filter((p) => p.type === "residential");
export const commercialProjects = projects.filter((p) => p.type === "commercial");
