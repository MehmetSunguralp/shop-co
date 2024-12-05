"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { ProductCard } from "../ProductCard/ProductCard";
import { ProductsProps } from "@/types/ProductsProps";
import styles from "./TopSelling.module.scss";

interface TopSellingProps {
	allProducts: ProductsProps;
}

export const TopSelling: React.FC<TopSellingProps> = ({ allProducts }) => {
	const { items } = useSelector((state: RootState) => state.products);
	const productsToRender = items.length > 0 ? items : allProducts.products;
	return (
		<section className={styles.topSelling}>
			<h3 className={styles.sectionTitle}>TOP SELLING</h3>
			<div className={styles.productList}>
				{productsToRender.slice(10, 14).map((product) => (
					<ProductCard
						key={product.id}
						id={product.id}
						thumbnail={product.thumbnail}
						title={product.title}
						rating={product.rating}
						price={product.price}
						discountPercentage={product.discountPercentage}
					/>
				))}
			</div>
			<button className={styles.viewAllBtn}>View All</button>
		</section>
	);
};
