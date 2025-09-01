import { CategoryWithIcon } from "@/types/category";

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
    ...CategoryWithIcon.map(({ title, icon }) => ({
      id: title,
      name: title,
      image: icon.startsWith("/image/") ? icon : `/image${icon}`,
    })),
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
