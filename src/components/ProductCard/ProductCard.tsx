import Image from "next/image";
import Link from "next/link";
import { ProductCardProps } from "@/types/ProductCardProps";
import starIcon from "@/public/common/star.svg";
import styles from "./ProductCard.module.scss";

export const ProductCard: React.FC<ProductCardProps> = ({ id, thumbnail, title, rating, price, discountPercentage }) => {
	//Count rating stars
	let arr = [0];
	for (let i = 1; i < Math.round(rating); i++) {
		arr.push(i);
	}

	return (
		<Link href={""} className={styles.productCard} title={title}>
			<div className={styles.thumbnailWrapper}>
				<Image src={thumbnail} alt="asd" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
			</div>
			<p className={styles.title}>{title}</p>
			<span className={styles.ratingContainer}>
				{arr.map((num) => {
					return <Image src={starIcon} alt="star" key={num} />;
				})}
				<span className={styles.rating}>
					{Math.round(rating) + "/"}
					<span>5</span>
				</span>
			</span>

			<p className={styles.price}>${price}</p>
		</Link>
	);
};
