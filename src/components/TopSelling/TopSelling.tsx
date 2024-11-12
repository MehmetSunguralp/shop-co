import { ProductCard } from "../ProductCard/ProductCard";
import styles from "./TopSelling.module.scss";
import { ProductsProps } from "@/types/ProductsProps";

interface TopSellingProps {
	allProducts: ProductsProps;
}

export const TopSelling: React.FC<TopSellingProps> = ({ allProducts }) => {
	return (
		<section className={styles.topSelling}>
			<h3 className={styles.sectionTitle}>TOP SELLING</h3>
			<div className={styles.productList}>
				{allProducts.products.slice(10, 14).map((product) => (
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
