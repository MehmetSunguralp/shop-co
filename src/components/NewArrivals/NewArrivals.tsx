import { ProductCard } from "../ProductCard/ProductCard";
import styles from "./NewArrivals.module.scss";
import { ProductsProps } from "@/types/ProductsProps";

interface NewArrivalsProps {
	allProducts: ProductsProps;
}

export const NewArrivals: React.FC<NewArrivalsProps> = ({ allProducts }) => {
	return (
		<section className={styles.newArrivals}>
			<h3 className={styles.sectionTitle}>NEW ARRIVALS</h3>
			<div className={styles.productList}>
				{allProducts.products.slice(0, 4).map((product: any) => {
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
