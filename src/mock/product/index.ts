import { Category } from "@/types/category";
import type { Participant, Product } from "@/types/product";

const createDate = (iso: string) => new Date(iso);

// 참여자 목 데이터 생성을 위한 이름 목록
const mockNames = [
  "김철수",
  "이영희",
  "박민수",
  "최지영",
  "정현우",
  "한소희",
  "강동원",
  "송혜교",
  "이병헌",
  "전지현",
  "차태현",
  "김하늘",
  "원빈",
  "고현정",
  "김우빈",
  "수지",
  "박보검",
  "김고은",
  "공유",
  "김태희",
  "현빈",
  "손예진",
  "이민호",
  "박신혜",
  "이종석",
  "한효주",
  "남주혁",
  "이성경",
  "박서준",
  "김지원",
  "지창욱",
  "남지현",
  "서인국",
  "정은지",
  "윤시윤",
  "박민영",
  "김재중",
  "구하라",
  "이홍기",
  "설현",
];

// 랜덤 참여자 생성 함수
const createRandomParticipants = (count: number): Participant[] => {
  const shuffledNames = [...mockNames].sort(() => Math.random() - 0.5);
  return Array.from({ length: count }, (_, index) => ({
    id: `participant_${Date.now()}_${index}`,
    name: shuffledNames[index % shuffledNames.length],
    joinedAt: createDate(
      new Date(
        Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000,
      ).toISOString(),
    ),
  }));
};

const createPlan = (
  id: string,
  name: string,
  price: number,
  discountRate = 10,
  participantCount?: number,
  isIndividual = false, // 개인 구독 여부
) => {
  const discountPrice = Math.round(price * (1 - discountRate / 100));
  const maxParticipants = isIndividual ? 1 : 4;
  // participantCount가 지정되지 않은 경우 설정
  const actualParticipantCount = isIndividual 
    ? 0 // 개인 구독은 현재 참여자 0명
    : (participantCount ?? Math.floor(Math.random() * maxParticipants));

  return {
    id,
    name,
    description: `${name} 플랜`,
    price,
    discountPrice,
    discountRate,
    participants: createRandomParticipants(actualParticipantCount),
    maxParticipants,
    endDate: createDate("2025-12-31"),
    createdAt: createDate("2024-01-01"),
    updatedAt: createDate("2024-06-01"),
  };
};

export const MockProducts: Product[] = [
  // AI
  {
    id: "p_ai_001",
    name: "ChatGPT Plus",
    serviceName: "ChatGPT",
    image: "/image/product/chatgpt.png",
    bannerImage: "/image/chatgpt.jpg",
    category: [Category.AI],
    gallery: ["/image/product/chatgpt.png"],
    popularProduct: true,
    mostUsedProduct: true,
    plan: [
      createPlan("pl_ai_001", "Party Plan", 20000, 10, 2),
      createPlan("pl_ai_001_individual", "Individual Plan", 24000, 0, 0, true)
    ],
    createdAt: createDate("2024-01-10"),
    updatedAt: createDate("2024-06-10"),
    question: {
      description: "ChatGPT는 OpenAI에서 제공하는 AI 모델입니다.",
      images: ["/image/product/chatgpt.png"],
    },
  },
  {
    id: "p_ai_002",
    name: "Claude Pro",
    serviceName: "Claude",
    image: "/image/product/claude.png",
    bannerImage: "/image/chatgpt.jpg",
    category: [Category.AI],
    gallery: ["/image/product/chatgpt.png"],
    popularProduct: true,
    mostUsedProduct: false,
    plan: [createPlan("pl_ai_002", "Standard", 25000, 10, 4)],
    createdAt: createDate("2024-01-11"),
    updatedAt: createDate("2024-06-11"),
    question: {
      description: "Claude는 현존 최고 코딩 모델이며, 코딩을 할 때 사용합니다.",
      images: ["/image/product/chatgpt.png"],
    },
  },
  {
    id: "p_ai_004",
    name: "Perplexity Pro",
    serviceName: "Perplexity",
    image: "/image/product/perplexity.png",
    bannerImage: "/image/chatgpt.jpg",
    category: [Category.AI],
    gallery: ["/image/product/chatgpt.png"],
    popularProduct: false,
    mostUsedProduct: true,
    plan: [createPlan("pl_ai_004", "Standard", 20000, 10, 3)],
    createdAt: createDate("2024-01-14"),
    updatedAt: createDate("2024-06-14"),
    question: {
      description:
        "Perplexity는 현존 최고 코딩 모델이며, 코딩을 할 때 사용합니다.",
      images: ["/image/product/chatgpt.png"],
    },
  },
  {
    id: "p_ai_005",
    name: "Google One",
    serviceName: "Google One",
    image: "/image/product/google_one.jpg",
    bannerImage: "/image/chatgpt.jpg",
    category: [Category.AI],
    gallery: ["/image/product/chatgpt.png"],
    popularProduct: true,
    mostUsedProduct: false,
    plan: [createPlan("pl_ai_005", "Standard", 24000, 10, 0)],
    createdAt: createDate("2024-01-15"),
    updatedAt: createDate("2024-06-15"),
    question: {
      description:
        "Google One는 현존 최고 코딩 모델이며, 코딩을 할 때 사용합니다.",
      images: ["/image/product/chatgpt.png"],
    },
  },

  // MUSIC
  {
    id: "p_music_001",
    name: "Spotify Premium",
    serviceName: "Spotify",
    image: "/image/product/spotify.svg",
    bannerImage: "/image/product/banner/spotify.jpg",
    category: [Category.MUSIC],
    gallery: ["/image/product/chatgpt.png"],
    popularProduct: true,
    mostUsedProduct: true,
    plan: [
      createPlan("pl_music_001", "Party Plan", 13900, 10, 3),
      createPlan("pl_music_001_individual", "Individual Plan", 16900, 0, 0, true)
    ],
    createdAt: createDate("2024-02-01"),
    updatedAt: createDate("2024-06-20"),
    question: {
      description:
        "Spotify는 현존 최고 코딩 모델이며, 코딩을 할 때 사용합니다.",
      images: [
        "/image/product/banner/spotify2.png",
        "/image/product/banner/spotify3.webp",
      ],
    },
  },
  {
    id: "p_music_003",
    name: "Tidal",
    serviceName: "Tidal",
    image: "/image/product/tidal.png",
    bannerImage: "/image/banner/tidal.png",
    category: [Category.MUSIC],
    gallery: ["/image/product/chatgpt.png"],
    popularProduct: false,
    mostUsedProduct: false,
    plan: [createPlan("pl_music_003", "Standard", 14900)],
    createdAt: createDate("2024-02-04"),
    updatedAt: createDate("2024-06-23"),
    question: {
      description: "Tidal는 현존 최고 코딩 모델이며, 코딩을 할 때 사용합니다.",
      images: ["/image/product/chatgpt.png"],
    },
  },
  {
    id: "p_music_004",
    name: "YouTube Music",
    serviceName: "YouTube Music",
    image: "/image/product/youtube_music.png",
    bannerImage: "/image/banner/spotify.jpg",
    category: [Category.MUSIC],
    gallery: ["/image/product/chatgpt.png"],
    popularProduct: true,
    mostUsedProduct: true,
    plan: [createPlan("pl_music_004", "Standard", 10900)],
    createdAt: createDate("2024-02-05"),
    updatedAt: createDate("2024-06-24"),
    question: {
      description:
        "YouTube Music는 현존 최고 코딩 모델이며, 코딩을 할 때 사용합니다.",
      images: ["/image/product/chatgpt.png"],
    },
  },

  // STREAMING
  {
    id: "p_stream_001",
    name: "Netflix",
    serviceName: "Netflix",
    image: "/image/product/netflix.png",
    bannerImage: "/image/theboys.png",
    category: [Category.STREAMING],
    gallery: ["/image/product/chatgpt.png"],
    popularProduct: true,
    mostUsedProduct: true,
    plan: [
      createPlan("pl_stream_001", "Party Plan", 17000, 10, 4),
      createPlan("pl_stream_001_individual", "Individual Plan", 20900, 0, 0, true)
    ],
    createdAt: createDate("2024-03-01"),
    updatedAt: createDate("2024-06-28"),
    question: {
      description:
        "Netflix는 현존 최고 코딩 모델이며, 코딩을 할 때 사용합니다.",
      images: ["/image/product/chatgpt.png"],
    },
  },
  {
    id: "tving_stream_002",
    name: "TVING",
    serviceName: "TVING",
    image: "/image/product/tving.png",
    bannerImage: "/image/theboys.png",
    category: [Category.STREAMING],
    gallery: ["/image/product/chatgpt.png"],
    popularProduct: true,
    mostUsedProduct: true,
    plan: [createPlan("pl_stream_003", "Premium", 17000, 10, 4)],
    createdAt: createDate("2024-03-01"),
    updatedAt: createDate("2024-06-28"),
    question: {
      description: "TVING는 현존 최고 코딩 모델이며, 코딩을 할 때 사용합니다.",
      images: ["/image/product/chatgpt.png"],
    },
  },
  {
    id: "disney_stream_002",
    name: "Disney+",
    serviceName: "Disney+",
    image: "/image/product/disney.jpeg",
    bannerImage: "/image/theboys.png",
    category: [Category.STREAMING],
    gallery: ["/image/product/chatgpt.png"],
    popularProduct: true,
    mostUsedProduct: false,
    plan: [createPlan("pl_stream_002", "Standard", 9900, 10, 1)],
    createdAt: createDate("2024-03-02"),
    updatedAt: createDate("2024-06-29"),
    question: {
      description:
        "Disney+는 현존 최고 코딩 모델이며, 코딩을 할 때 사용합니다.",
      images: ["/image/product/chatgpt.png"],
    },
  },
  {
    id: "p_stream_003",
    name: "YouTube Premium",
    serviceName: "YouTube Premium",
    image: "/image/product/youtube.png",
    bannerImage: "/image/theboys.png",
    category: [Category.STREAMING],
    gallery: ["/image/product/chatgpt.png"],
    popularProduct: true,
    mostUsedProduct: true,
    plan: [createPlan("pl_stream_003", "Standard", 12900)],
    createdAt: createDate("2024-03-10"),
    updatedAt: createDate("2024-07-07"),
    question: {
      description:
        "YouTube Premium는 현존 최고 코딩 모델이며, 코딩을 할 때 사용합니다.",
      images: ["/image/product/chatgpt.png"],
    },
  },
  {
    id: "p_stream_004",
    name: "Amazon Prime Video",
    serviceName: "Amazon Prime Video",
    image: "/image/product/amazon.png",
    bannerImage: "/image/theboys.png",
    category: [Category.STREAMING],
    gallery: ["/image/product/chatgpt.png"],
    popularProduct: true,
    mostUsedProduct: true,
    plan: [createPlan("pl_stream_004", "Standard", 11900)],
    createdAt: createDate("2024-03-11"),
    updatedAt: createDate("2024-07-08"),
    question: {
      description:
        "Amazon Prime Video는 현존 최고 코딩 모델이며, 코딩을 할 때 사용합니다.",
      images: ["/image/product/chatgpt.png"],
    },
  },
];
