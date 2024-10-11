"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { fetchProducts } from "@/api/api";
import { ThreeDots } from "react-loader-spinner";
import arrow from "@/public/common/arrow.svg";
import styles from "./OurHappyCustomers.module.scss";
import { CommentCard } from "../CommentCard/CommentCard";

export const OurHappyCustomers = () => {
	const [products, setProducts] = useState<object[]>([]);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		fetchProducts().then((data) => {
			setProducts(data.products);
			setLoading(false);
		});
	}, []);

	if (loading) {
		return (
			<div className={styles.loader}>
				<ThreeDots color="#000" height={80} width={80} />
			</div>
		);
	}

	//Sort best reviews
	const bestReviews = products.map((product: any) => {
		return {
			title: product.title,
			bestReview: product.reviews.sort((a: any, b: any) => b.rating - a.rating)[0],
		};
	});

	return (
		<div className={styles.ourHappyCustomers}>
			<div className={styles.header}>
				<h3 className={styles.sectionTitle}>OUR HAPPY CUSTOMERS</h3>
				<div className={styles.navigateCommentButtonsContainer}>
					<button className={styles.previousBtn}>
						<Image src={arrow} alt="previous-btn" />
					</button>
					<button className={styles.nextBtn}>
						<Image src={arrow} alt="next-btn" />
					</button>
				</div>
			</div>
			<div className={styles.commentsSection}>
				{bestReviews.map((product: any, index: number) => (
					<CommentCard
						key={index}
						id={product.id}
						rating={product.bestReview.rating}
						reviewerName={product.bestReview.reviewerName}
						comment={product.bestReview.comment}
					/>
				))}
			</div>
		</div>
	);
};
