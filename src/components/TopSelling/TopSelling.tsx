"use client";
import { useEffect, useState } from "react";
import { fetchProducts } from "@/api/api";
import { ProductCard } from "../ProductCard/ProductCard";
import styles from "./TopSelling.module.scss";
import { ThreeDots } from "react-loader-spinner";

export const TopSelling: React.FC = () => {
	const [products, setProducts] = useState<object[]>([]);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		fetchProducts().then((data) => {
			setProducts(data.products);
			setLoading(false); // Stop
		});
	}, []);
	return (
		<section className={styles.topSelling}>
			<h3 className={styles.sectionTitle}>TOP SELLING</h3>
			<div className={styles.productList}>
				{!loading ? (
					products.slice(10, 14).map((product: any) => {
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
					})
				) : (
					<ThreeDots
						visible={true}
						height="80"
						width="80"
						color="#000000"
						radius="9"
						ariaLabel="three-dots-loading"
						wrapperStyle={{}}
						wrapperClass=""
					/>
				)}
			</div>
			<button className={styles.viewAllBtn}>View All</button>
		</section>
	);
};
