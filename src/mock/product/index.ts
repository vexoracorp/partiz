export interface ProductData {
  id: string;
  title: string;
  price: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
}

export const productData: ProductData[] = [
  {
    id: "1",
    title: "ChatGPT Plus",
    price: "월 20,000원",
    imageUrl: "/image/product/chatgpt.png",
    imageAlt: "ChatGPT Plus",
    category: "ai"
  },
  {
    id: "2",
    title: "Netflix Premium",
    price: "월 17,000원",
    imageUrl: "/image/product/chatgpt.png", // 임시로 chatgpt 이미지 사용
    imageAlt: "Netflix Premium",
    category: "streaming"
  },
  {
    id: "3",
    title: "Spotify Premium",
    price: "월 13,900원",
    imageUrl: "/image/product/chatgpt.png", // 임시로 chatgpt 이미지 사용
    imageAlt: "Spotify Premium",
    category: "music"
  },
  {
    id: "4",
    title: "Adobe Creative Cloud",
    price: "월 59,000원",
    imageUrl: "/image/product/chatgpt.png", // 임시로 chatgpt 이미지 사용
    imageAlt: "Adobe Creative Cloud",
    category: "software"
  },
  {
    id: "5",
    title: "Coursera Plus",
    price: "월 49,000원",
    imageUrl: "/image/product/chatgpt.png", // 임시로 chatgpt 이미지 사용
    imageAlt: "Coursera Plus",
    category: "education"
  },
  {
    id: "6",
    title: "Midjourney",
    price: "월 30,000원",
    imageUrl: "/image/product/chatgpt.png", // 임시로 chatgpt 이미지 사용
    imageAlt: "Midjourney",
    category: "ai"
  },
  {
    id: "7",
    title: "Disney+",
    price: "월 9,900원",
    imageUrl: "/image/product/chatgpt.png", // 임시로 chatgpt 이미지 사용
    imageAlt: "Disney+",
    category: "streaming"
  },
  {
    id: "8",
    title: "Apple Music",
    price: "월 11,000원",
    imageUrl: "/image/product/chatgpt.png", // 임시로 chatgpt 이미지 사용
    imageAlt: "Apple Music",
    category: "music"
  },
  {
    id: "9",
    title: "Figma Pro",
    price: "월 15,000원",
    imageUrl: "/image/product/chatgpt.png", // 임시로 chatgpt 이미지 사용
    imageAlt: "Figma Pro",
    category: "software"
  },
  {
    id: "10",
    title: "Udemy Business",
    price: "월 25,000원",
    imageUrl: "/image/product/chatgpt.png", // 임시로 chatgpt 이미지 사용
    imageAlt: "Udemy Business",
    category: "education"
  }
];

// 카테고리별 제품 필터링 함수
export const getProductsByCategory = (category: string): ProductData[] => {
  if (category === "all") {
    return productData;
  }
  return productData.filter(product => product.category === category);
};
