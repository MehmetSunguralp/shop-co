"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { fetchProducts } from "@/api/api";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { ThreeDots } from "react-loader-spinner";
import rightArrow from "@/public/common/right-arrow.svg";
import leftArrow from "@/public/common/left-arrow.svg";
import styles from "./OurHappyCustomers.module.scss";
import { CommentCard } from "../CommentCard/CommentCard";

export const OurHappyCustomers = () => {
	const [products, setProducts] = useState<object[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const navigationNextRef = useRef<HTMLButtonElement>(null);
	const navigationPrevRef = useRef<HTMLButtonElement>(null);
	const [slidesPerView, setSlidesPerView] = useState<number>(3);

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
					// install Swiper modules
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
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};
