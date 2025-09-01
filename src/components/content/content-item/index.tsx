import styles from "@/components/content/content-item/styles.module.scss";

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
  return (
    <a href={href} className={styles.contentItem}>
      <img src={imageUrl} className={styles.image} alt={title} />
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.rating}>
          <img src="/star.svg" className={styles.ratingIcon} alt="Rating" />{" "}
          {rating}
        </p>
      </div>
    </a>
  );
}
