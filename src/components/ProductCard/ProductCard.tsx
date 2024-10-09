import Image from "next/image";
import Link from "next/link";
import { ProductCardProps } from "@/types/ProductCardProps";
import starIcon from "@/public/common/star.svg";
import styles from "./ProductCard.module.scss";

export const ProductCard: React.FC<ProductCardProps> = ({ id, thumbnail, title, rating, price, discountPercentage }) => {
	//Count rating stars
	let starCounter = [0];
	for (let i = 1; i < Math.round(rating); i++) {
		starCounter.push(i);
	}
	//Limit product title
	const limitTitle = (productTitle: string) => {
		if (productTitle.length >= 40) {
			productTitle = productTitle.slice(0, 40).trim() + "...";
			return productTitle;
		} else {
			return productTitle;
		}
	};
	//Handle old price and discount visibility
	let visibility: string = "block";
	if (Math.floor(discountPercentage) === 0) {
		visibility = "none";
	}
	return (
		<Link href={""} className={styles.productCard} title={title} id={String(id)}>
			<div className={styles.thumbnailWrapper}>
				<Image src={thumbnail} alt="asd" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
			</div>
			<p className={styles.title}>{limitTitle(title)}</p>
			<span className={styles.ratingContainer}>
				{starCounter.map((num) => {
					return <Image src={starIcon} alt="star" key={num} />;
				})}
				<span className={styles.rating}>
					{Math.round(rating) + "/"}
					<span>5</span>
				</span>
			</span>
			<div className={styles.priceContainer}>
				<span className={styles.price}>
					{Math.floor(discountPercentage) !== 0 ? "$" + Math.floor(price - (price * discountPercentage) / 100) : "$" + price}
				</span>
				<span className={styles.oldPrice} style={{ display: visibility }}>
					{"$" + Math.floor(price)}
				</span>
				<span className={styles.discountPercentage} style={{ display: visibility }}>
					{"-%" + Math.round(discountPercentage)}
				</span>
			</div>
		</Link>
	);
};
