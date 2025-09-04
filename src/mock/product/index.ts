import { Category } from "@/types/category";
import { type Participant, PlanType, type Product } from "@/types/product";

const createDate = (iso: string) => new Date(iso);

// 랜덤 날짜 생성 함수들
const createRandomDate = (startYear: number, endYear: number) => {
  const start = new Date(startYear, 0, 1);
  const end = new Date(endYear, 11, 31);
  const randomTime =
    start.getTime() + Math.random() * (end.getTime() - start.getTime());
  return new Date(randomTime);
};

const createRandomEndDate = () => {
  // 2025년 1월부터 2026년 12월까지 랜덤
  return createRandomDate(2025, 2026);
};

const createRandomCreatedDate = () => {
  // 2024년 1월부터 2024년 12월까지 랜덤
  return createRandomDate(2024, 2024);
};

const createRandomUpdatedDate = (createdDate: Date) => {
  // 생성일 이후부터 현재까지 랜덤
  const now = new Date();
  const randomTime =
    createdDate.getTime() +
    Math.random() * (now.getTime() - createdDate.getTime());
  return new Date(randomTime);
};

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
  type: PlanType,
  participantCount?: number,
) => {
  const originalPrice = price;

  // PlanType에 따른 최대 참여자 수 설정
  const getMaxParticipants = (planType: PlanType): number => {
    switch (planType) {
      case PlanType.INDIVIDUAL:
        return 1;
      case PlanType.PARTY:
        return 4;
      default:
        return 4;
    }
  };

  const maxParticipants = getMaxParticipants(type);

  // participantCount가 지정되지 않은 경우 설정
  const actualParticipantCount =
    type === PlanType.INDIVIDUAL
      ? 0 // 개인 구독은 현재 참여자 0명
      : (participantCount ?? Math.floor(Math.random() * maxParticipants));

  const createdAt = createRandomCreatedDate();
  const updatedAt = createRandomUpdatedDate(createdAt);
  return {
    id,
    type,
    name,
    description: `✅ 티빙+웨이브 같이 이용 가능합니다.
    ✅ 티빙은 등록된 계정 정보로 로그인해 주세요.
    ✅ 웨이브 계정 정보는 댓글을 확인해 주세요.
    ✅ 프로필은 선택(생성) 후 닉네임을 본인의 벗츠 닉네임으로 변경해 주세요.
    ✅ 다수가 사용하는 계정인 만큼 불쾌감을 줄 수 있는 프로필 이미지나 닉네임은 피해주세요.
    ✅ 1인 1회선 원칙으로 합니다.
    ✅ 웨이브 SBS 시청 안됩니다.
    ✅ 다양한 기기에서 접속은 가능하지만 본인이 여러대의 기기에서 동시접속은 불가합니다.
    ✅ 반드시 본인의 프로필로 컨텐츠를 이용해 주세요.
    ✅ 계정 정보는 본인만 이용하며 절대 타인에게 노출하지 않습니다

    * 성인 컨텐츠 시청 시 웨이브 성인 비밀번호는 '1111'입니다. 설정 변경 없이 이용해 주세요.
    * 티빙 성인 컨텐츠 시청 시 각 프로필 1회 인증 후 이용 가능합니다.
    * * 이용 중 문의는 댓글이나 카톡 주세요. (09시 ~ 24시)
    * * 기간 연장 가능합니다. 파티 종료 7일 전 공지하겠습니다.`,
    price,
    originalPrice,
    participants: createRandomParticipants(actualParticipantCount),
    maxParticipants,
    endDate: createRandomEndDate(),
    createdAt,
    updatedAt,
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
      createPlan("pl_ai_001_party", "Party Plan", 20000, PlanType.PARTY, 10),
      createPlan(
        "pl_ai_001_individual",
        "Individual Plan",
        24000,
        PlanType.INDIVIDUAL,
        0,
      ),
      createPlan(
        "pl_ai_001_party2",
        "Premium Party Plan",
        35000,
        PlanType.PARTY,
        15,
      ),
      createPlan(
        "pl_ai_001_individual2",
        "Student Plan",
        15000,
        PlanType.INDIVIDUAL,
        20,
      ),
      createPlan(
        "pl_ai_001_party3",
        "Enterprise Party Plan",
        45000,
        PlanType.PARTY,
        5,
      ),
    ],
    createdAt: createRandomCreatedDate(),
    updatedAt: createRandomUpdatedDate(createRandomCreatedDate()),
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
    plan: [
      createPlan(
        "pl_ai_002_individual",
        "Basic Plan",
        25000,
        PlanType.INDIVIDUAL,
        10,
      ),
      createPlan("pl_ai_002_party", "Party Plan", 30000, PlanType.PARTY, 15),
      createPlan(
        "pl_ai_002_party2",
        "Enterprise Party Plan",
        80000,
        PlanType.PARTY,
        0,
      ),
    ],
    createdAt: createRandomCreatedDate(),
    updatedAt: createRandomUpdatedDate(createRandomCreatedDate()),
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
    plan: [
      createPlan(
        "pl_ai_004_individual",
        "Individual Plan",
        20000,
        PlanType.INDIVIDUAL,
        0,
      ),
      createPlan("pl_ai_004_party", "Party Plan", 25000, PlanType.PARTY, 10),
      createPlan(
        "pl_ai_004_student",
        "Student Plan",
        12000,
        PlanType.INDIVIDUAL,
        25,
      ),
    ],
    createdAt: createRandomCreatedDate(),
    updatedAt: createRandomUpdatedDate(createRandomCreatedDate()),
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
    plan: [
      createPlan(
        "pl_ai_005_basic",
        "Basic Plan",
        24000,
        PlanType.INDIVIDUAL,
        10,
      ),
      createPlan("pl_ai_005_family", "Family Plan", 40000, PlanType.PARTY, 15),
      createPlan(
        "pl_ai_005_enterprise",
        "Enterprise Plan",
        100000,
        PlanType.PARTY,
        0,
      ),
    ],
    createdAt: createRandomCreatedDate(),
    updatedAt: createRandomUpdatedDate(createRandomCreatedDate()),
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
      createPlan(
        "pl_music_001_individual",
        "Individual Plan",
        16900,
        PlanType.INDIVIDUAL,
        0,
      ),
      createPlan("pl_music_001_party", "Party Plan", 13900, PlanType.PARTY, 10),
      createPlan(
        "pl_music_001_family",
        "Family Plan",
        22000,
        PlanType.PARTY,
        15,
      ),
      createPlan(
        "pl_music_001_student",
        "Student Plan",
        8500,
        PlanType.INDIVIDUAL,
        30,
      ),
      createPlan(
        "pl_music_001_premium",
        "Premium Plan",
        25000,
        PlanType.PARTY,
        5,
      ),
    ],
    createdAt: createRandomCreatedDate(),
    updatedAt: createRandomUpdatedDate(createRandomCreatedDate()),
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
    plan: [
      createPlan(
        "pl_music_003_individual",
        "Individual Plan",
        14900,
        PlanType.INDIVIDUAL,
        0,
      ),
      createPlan("pl_music_003_party", "Party Plan", 18000, PlanType.PARTY, 10),
      createPlan(
        "pl_music_003_family",
        "Family Plan",
        28000,
        PlanType.PARTY,
        15,
      ),
    ],
    createdAt: createRandomCreatedDate(),
    updatedAt: createRandomUpdatedDate(createRandomCreatedDate()),
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
    plan: [
      createPlan(
        "pl_music_004_individual",
        "Individual Plan",
        10900,
        PlanType.INDIVIDUAL,
        0,
      ),
      createPlan("pl_music_004_party", "Party Plan", 13000, PlanType.PARTY, 10),
      createPlan(
        "pl_music_004_student",
        "Student Plan",
        6500,
        PlanType.INDIVIDUAL,
        25,
      ),
      createPlan(
        "pl_music_004_family",
        "Family Plan",
        20000,
        PlanType.PARTY,
        15,
      ),
    ],
    createdAt: createRandomCreatedDate(),
    updatedAt: createRandomUpdatedDate(createRandomCreatedDate()),
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
      createPlan(
        "pl_stream_001_individual",
        "Individual Plan",
        20900,
        PlanType.INDIVIDUAL,
        0,
      ),
      createPlan(
        "pl_stream_001_party",
        "Party Plan",
        17000,
        PlanType.PARTY,
        10,
      ),
      createPlan(
        "pl_stream_001_family",
        "Family Plan",
        28000,
        PlanType.PARTY,
        15,
      ),
      createPlan(
        "pl_stream_001_student",
        "Student Plan",
        12000,
        PlanType.INDIVIDUAL,
        20,
      ),
      createPlan(
        "pl_stream_001_premium",
        "Premium Plan",
        35000,
        PlanType.PARTY,
        5,
      ),
    ],
    createdAt: createRandomCreatedDate(),
    updatedAt: createRandomUpdatedDate(createRandomCreatedDate()),
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
    plan: [
      createPlan(
        "pl_stream_003_individual",
        "Individual Plan",
        17000,
        PlanType.INDIVIDUAL,
        0,
      ),
      createPlan(
        "pl_stream_003_party",
        "Party Plan",
        20000,
        PlanType.PARTY,
        10,
      ),
      createPlan(
        "pl_stream_003_family",
        "Family Plan",
        32000,
        PlanType.PARTY,
        15,
      ),
      createPlan(
        "pl_stream_003_premium",
        "Premium Plan",
        40000,
        PlanType.PARTY,
        5,
      ),
    ],
    createdAt: createRandomCreatedDate(),
    updatedAt: createRandomUpdatedDate(createRandomCreatedDate()),
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
    plan: [
      createPlan(
        "pl_stream_002_individual",
        "Individual Plan",
        9900,
        PlanType.INDIVIDUAL,
        0,
      ),
      createPlan(
        "pl_stream_002_party",
        "Party Plan",
        12000,
        PlanType.PARTY,
        10,
      ),
      createPlan(
        "pl_stream_002_family",
        "Family Plan",
        20000,
        PlanType.PARTY,
        15,
      ),
      createPlan(
        "pl_stream_002_student",
        "Student Plan",
        7000,
        PlanType.INDIVIDUAL,
        25,
      ),
    ],
    createdAt: createRandomCreatedDate(),
    updatedAt: createRandomUpdatedDate(createRandomCreatedDate()),
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
    plan: [createPlan("pl_stream_003", "Standard", 12900, PlanType.INDIVIDUAL)],
    createdAt: createRandomCreatedDate(),
    updatedAt: createRandomUpdatedDate(createRandomCreatedDate()),
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
    plan: [createPlan("pl_stream_004", "Standard", 11900, PlanType.INDIVIDUAL)],
    createdAt: createRandomCreatedDate(),
    updatedAt: createRandomUpdatedDate(createRandomCreatedDate()),
    question: {
      description:
        "Amazon Prime Video는 현존 최고 코딩 모델이며, 코딩을 할 때 사용합니다.",
      images: ["/image/product/chatgpt.png"],
    },
  },
];
