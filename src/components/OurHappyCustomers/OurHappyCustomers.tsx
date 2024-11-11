"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { fetchProducts } from "@/api/api";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { ThreeDots } from "react-loader-spinner";
import rightArrow from "@/public/common/right-arrow.svg";
import leftArrow from "@/public/common/left-arrow.svg";
import styles from "./OurHappyCustomers.module.scss";
import { CommentCard } from "../CommentCard/CommentCard";
import { ProductDetailProps } from "@/types/ProductDetailProps";

export const OurHappyCustomers = () => {
	const [products, setProducts] = useState<ProductDetailProps[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const navigationNextRef = useRef<HTMLButtonElement>(null);
	const navigationPrevRef = useRef<HTMLButtonElement>(null);
	const [slidesPerView, setSlidesPerView] = useState<number>(3);

	// Handle swiper sliders number
	const handleSlidesPerView = () => {
		if (typeof window !== "undefined") {
			const target = window.innerWidth;
			if (target <= 1050 && target > 800) {
				setSlidesPerView(2);
			} else if (target <= 800) {
				setSlidesPerView(1);
			} else {
				setSlidesPerView(3);
			}
		}
	};

	// useEffect to handle client-side code
	useEffect(() => {
		// Fetch the products
		fetchProducts().then((data) => {
			setProducts(data.products);
			setLoading(false);
		});

		// Handle slide views when window is resized
		handleSlidesPerView();
		if (typeof window !== "undefined") {
			const handleResize = () => handleSlidesPerView();
			window.addEventListener("resize", handleResize);

			return () => window.removeEventListener("resize", handleResize);
		}
	}, []);

	if (loading) {
		return (
			<div className={styles.loader}>
				<ThreeDots color="#000" height={80} width={80} />
			</div>
		);
	}

	// Sort best reviews
	const bestReviews = products.map((product) => {
		return {
			id: product.id,
			title: product.title,
			bestReview: product.reviews.sort((a, b) => b.rating - a.rating)[0],
		};
	});

	return (
		<div className={styles.ourHappyCustomers}>
			<div className={styles.header}>
				<h3 className={styles.sectionTitle}>OUR HAPPY CUSTOMERS</h3>
				<div className={styles.navigateCommentButtonsContainer}>
					<button className={styles.previousBtn} ref={navigationPrevRef}>
						<Image src={leftArrow} alt="previous-btn" />
					</button>
					<button className={styles.nextBtn} ref={navigationNextRef}>
						<Image src={rightArrow} alt="next-btn" />
					</button>
				</div>
			</div>
			<div className={styles.commentsSection}>
				<Swiper
					modules={[Navigation]}
					spaceBetween={20}
					slidesPerView={slidesPerView}
					navigation={{
						prevEl: navigationPrevRef.current,
						nextEl: navigationNextRef.current,
					}}
				>
					{bestReviews.map((product, index) => (
						<SwiperSlide key={index}>
							<CommentCard
								id={product.id}
								rating={product.bestReview.rating}
								reviewerName={product.bestReview.reviewerName}
								comment={product.bestReview.comment}
								style="home-page"
								date={null}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};
