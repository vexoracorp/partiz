export enum Category {
  STREAMING = "스트리밍",
  AI = "AI",
  MUSIC = "뮤직",
  EDUCATION = "교육",
  SOFTWARE = "소프트웨어",
}

export const CategoryWithIcon: { title: Category; icon: string }[] = [
  {
    title: Category.STREAMING,
    icon: "/category/streaming.png",
  },
  {
    title: Category.AI,
    icon: "/category/ai.png",
  },
  {
    title: Category.MUSIC,
    icon: "/category/music.png",
  },
  {
    title: Category.EDUCATION,
    icon: "/category/education.png",
  },
  {
    title: Category.SOFTWARE,
    icon: "/category/software.png",
  },
];

export type CategoryType = (typeof CategoryWithIcon)[number];
