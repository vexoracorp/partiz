import { useState } from "react";

import Category from "@/components/home/product-section/category";
import Product from "@/components/home/product-section/product";
import { MockProducts } from "@/mock/product";
import { filteredCategories } from "@/utils/category";

import s from "./styles.module.scss";

export default function ProductSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const filteredProducts = filteredCategories(MockProducts, selectedCategory);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className={s.container}>
      <div className={s.title_container}>
        <h2 className={s.title}>골라 담는 구독 서비스</h2>
        <p className={s.description}>
          파티즈에서 취향과 필요에 맞춰 골라 담고,
          <br />
          합리적인 가격으로 즐기세요
        </p>
      </div>
      <Category
        onCategoryChange={handleCategoryChange}
        selectedCategory={selectedCategory}
      />
      <div className={s.product_container}>
        {filteredProducts.map((product) => (
          <Product {...product} />
        ))}
      </div>
    </div>
  );
}
