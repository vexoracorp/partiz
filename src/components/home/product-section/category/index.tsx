import s from "./styles.module.scss";

interface CategoryProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function Category({
  selectedCategory,
  onCategoryChange,
}: CategoryProps) {
  const categories = [
    { id: "all", name: "전체", image: "/image/category/all.png" },
    {
      id: "streaming",
      name: "스트리밍",
      image: "/image/category/streaming.png",
    },
    { id: "ai", name: "AI", image: "/image/category/ai.png" },
    { id: "music", name: "뮤직", image: "/image/category/music.png" },
    { id: "education", name: "교육", image: "/image/category/education.png" },
    {
      id: "software",
      name: "소프트웨어",
      image: "/image/category/software.png",
    },
  ];

  const handleCategoryClick = (categoryId: string) => {
    onCategoryChange(categoryId);
  };

  return (
    <div className={s.container}>
      {categories.map((category) => (
        <div
          key={category.id}
          className={`${s.item} ${selectedCategory === category.id ? s.selected : ""}`}
          onClick={() => handleCategoryClick(category.id)}
        >
          <img src={category.image} alt={category.name} />
          <p>{category.name}</p>
        </div>
      ))}
    </div>
  );
}
