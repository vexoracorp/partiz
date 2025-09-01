import "@/components/content/content-item/styles.module.scss";

export interface ContentItemProps {
  title: string;
  imageUrl: string;
  rating: string;
  href: string;
}

export default function ContentItem({
  title,
  imageUrl,
  rating,
  href,
}: ContentItemProps) {
  const titleColor = "#151515";
  const ratingColor = "#7d7d7d";

  return (
    <a href={href} className="content-item">
      <img src={imageUrl} alt={title} />
      <h3 style={{ color: titleColor, fontWeight: "default" }}>{title}</h3>
      <p style={{ color: ratingColor }}>
        <img src="/star.svg" alt="Rating" /> {rating}
      </p>
    </a>
  );
}
