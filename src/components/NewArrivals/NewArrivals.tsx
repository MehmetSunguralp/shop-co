"use client"
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { ProductCard } from "../ProductCard/ProductCard";
import { ProductsProps } from "@/types/ProductsProps";
import styles from "./NewArrivals.module.scss";

interface NewArrivalsProps {
	allProducts: ProductsProps[];
}

export const NewArrivals: React.FC<NewArrivalsProps> = ({ allProducts }) => {
	// const { items } = useSelector((state: RootState) => state.products);

	// const productsToRender = items.length > 0 ? items : allProducts.products;

	return (
		<section className={styles.newArrivals}>
			<h3 className={styles.sectionTitle}>NEW ARRIVALS</h3>
			<div className={styles.productList}>
				{allProducts.slice(0, 4).map((product: any) => {
					return (
						<ProductCard
							key={product.id}
							id={product.id}
							thumbnail={product.thumbnail}
							title={product.title}
							rating={product.rating}
							price={product.price}
							discountPercentage={product.discountPercentage}
						/>
					);
				})}
			</div>
			<button className={styles.viewAllBtn}>View All</button>
		</section>
	);
};
