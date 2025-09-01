import { useState } from "react";

import Category from "@/components/home/product-section/category";
import Product from "@/components/home/product-section/product";
import { Typo } from "@/components/ui";
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
        <Typo.Display className={s.title}>골라 담는 구독 서비스</Typo.Display>
        <Typo.BodyLarge className={s.description}>
          파티즈에서 취향과 필요에 맞춰 골라 담고,
          <br />
          합리적인 가격으로 즐기세요
        </Typo.BodyLarge>
      </div>
      <Category
        onCategoryChange={handleCategoryChange}
        selectedCategory={selectedCategory}
      />
      <div className={s.product_container}>
        {filteredProducts.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
