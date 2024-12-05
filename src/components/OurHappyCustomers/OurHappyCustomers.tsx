"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import rightArrow from "@/public/common/right-arrow.svg";
import leftArrow from "@/public/common/left-arrow.svg";
import styles from "./OurHappyCustomers.module.scss";
import { CommentCard } from "../CommentCard/CommentCard";

import { ProductsProps } from "@/types/ProductsProps";

interface OurHappyCustomersProps {
	allProducts: ProductsProps;
}

export const OurHappyCustomers: React.FC<OurHappyCustomersProps> = ({ allProducts }) => {
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

	useEffect(() => {
		// Handle slide views when window is resized
		handleSlidesPerView();
		if (typeof window !== "undefined") {
			const handleResize = () => handleSlidesPerView();
			window.addEventListener("resize", handleResize);

			return () => window.removeEventListener("resize", handleResize);
		}
	}, []);

	const { items } = useSelector((state: RootState) => state.products);
	const products = items.length > 0 ? items : allProducts.products;
	// Sort best reviews
	const bestReviews = products.map((product: any) => {
		return {
			id: product.id,
			title: product.title,
			bestReview: product.reviews.sort((a: any, b: any) => b.rating - a.rating)[0],
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
					{bestReviews.map((product: any, index: number) => (
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
