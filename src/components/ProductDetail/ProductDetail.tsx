"use client";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { fetchProducts } from "@/api/api";
import { ProductDetailProps } from "@/types/ProductDetailProps";
import { ThreeDots } from "react-loader-spinner";
import styles from "./ProductDetail.module.scss";
import starIcon from "@/public/common/star.svg";
import plusIcon from "@/public/common/plus.svg";
import downArrow from "@/public/common/down-arrow.svg";
import minusIcon from "@/public/common/minus.svg";
import { CommentCard } from "../CommentCard/CommentCard";

export const ProductDetail: React.FC<{ productId: string }> = ({ productId }) => {
	const [sortOption, setSortOption] = useState<"latest" | "oldest" | "highToLow" | "lowToHigh">("latest");
	const [numberOfProduct, setNumberOfProduct] = useState<number>(1);
	const handleNumberOfProduct = (action: string) => {
		if (action === "increment") {
			setNumberOfProduct((number) => number + 1);
		} else if (action === "decrement" && numberOfProduct > 1) {
			setNumberOfProduct((number) => number - 1);
		}
	};

	const [product, setProduct] = useState<ProductDetailProps | null>(null);
	const [selectedSize, setSelectedSize] = useState<string>("");
	const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedSize(event.target.value);
	};

	const [mainImage, setMainImage] = useState<string>("");

	const fetchProductData = useCallback(async () => {
		try {
			const data = await fetchProducts();
			const foundProduct = data?.products.find((p: { id: number }) => p.id === Number(productId));
			setProduct(foundProduct || null);
			if (foundProduct) {
				setMainImage(foundProduct.images[0]);
			}
		} catch (error) {
			console.error("Error fetching product data:", error);
		}
	}, [productId]);

	useEffect(() => {
		fetchProductData();
	}, [fetchProductData]);

	//Review counter
	let counter: number = 0;
	product?.reviews.forEach(() => {
		counter += 1;
	});

	if (!product) {
		return (
			<div className={styles.loadingSpinner}>
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
			</div>
		);
	}

	// Count rating stars
	const starCounter = Array(Math.round(product.rating)).fill(0);

	// Handle old price and discount visibility
	const discount = Math.floor(product.discountPercentage);
	const newPrice = discount !== 0 ? product.price - (product.price * discount) / 100 : product.price;
	const visibility = discount === 0 ? "none" : "block";

	// Sort comments

	const sortedComments = [...product.reviews].sort((a, b) => {
		const dateA = a.date ? new Date(a.date).getTime() : 0;
		const dateB = b.date ? new Date(b.date).getTime() : 0;

		if (sortOption === "latest") {
			return dateB - dateA;
		}
		if (sortOption === "oldest") {
			return dateA - dateB;
		}
		if (sortOption === "highToLow") {
			return b.rating - a.rating;
		}
		if (sortOption === "lowToHigh") {
			return a.rating - b.rating;
		}
		return 0;
	});

	return (
		<div className={styles.productDetail}>
			<div className={styles.productSection}>
				<div className={styles.productImagesSection}>
					<div className={styles.thumbnailsContainer}>
						{product.images.map((image, index) => (
							<div key={index} className={styles.thumbnailWrapper} onClick={() => setMainImage(image)}>
								<Image
									src={image}
									alt={product.title}
									fill
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
									className={styles.thumbnailImage}
								/>
							</div>
						))}
					</div>
					<div className={styles.mainImage}>
						<Image
							src={mainImage}
							alt={product.title}
							fill
							priority
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							className={styles.fullImage}
						/>
					</div>
				</div>
				<div className={styles.textDetails}>
					<h1 className={styles.productTitle}>{product.title}</h1>
					<div className={styles.ratingContainer}>
						{starCounter.map((_, index) => (
							<Image src={starIcon} alt="star" key={index} className={styles.starIcon} />
						))}
						<span className={styles.rating}>
							{Math.round(product.rating)}/<span className={styles.rate}>5</span>
						</span>
					</div>
					<div className={styles.priceContainer}>
						<span className={styles.price}>
							{"$" +
								newPrice.toLocaleString(undefined, {
									minimumFractionDigits: 2,
									maximumFractionDigits: 2,
								})}
						</span>
						<span className={styles.oldPrice} style={{ display: visibility }}>
							{"$" +
								product.price.toLocaleString(undefined, {
									minimumFractionDigits: 2,
									maximumFractionDigits: 2,
								})}
						</span>
						<span className={styles.discountPercentage} style={{ display: visibility }}>
							{"-%" + discount}
						</span>
					</div>
					<p className={styles.description}>{product.description}</p>
					<div className={styles.colorPickingArea}>
						<p className={styles.sectionTitle}>Select Colors</p>
						<div className={styles.colorCirclesWrapper}>
							<span className={styles.colorCircle}></span>
							<span className={styles.colorCircle}></span>
							<span className={styles.colorCircle}></span>
						</div>
					</div>
					<div className={styles.sizePickingArea}>
						<p className={styles.sectionTitle}>Choose Size</p>
						<div className={styles.sizeWrapper}>
							<label className={styles.sizeLabel}>
								<input
									type="radio"
									name="size"
									value="Small"
									checked={selectedSize === "Small"}
									onChange={handleSizeChange}
									className={styles.sizeInput}
								/>
								<span className={styles.size}>Small</span>
							</label>
							<label className={styles.sizeLabel}>
								<input
									type="radio"
									name="size"
									value="Medium"
									checked={selectedSize === "Medium"}
									onChange={handleSizeChange}
									className={styles.sizeInput}
								/>
								<span className={styles.size}>Medium</span>
							</label>
							<label className={styles.sizeLabel}>
								<input
									type="radio"
									name="size"
									value="Large"
									checked={selectedSize === "Large"}
									onChange={handleSizeChange}
									className={styles.sizeInput}
								/>
								<span className={styles.size}>Large</span>
							</label>
							<label className={styles.sizeLabel}>
								<input
									type="radio"
									name="size"
									value="X-Large"
									checked={selectedSize === "X-Large"}
									onChange={handleSizeChange}
									className={styles.sizeInput}
								/>
								<span className={styles.size}>X-Large</span>
							</label>
						</div>
					</div>

					<div className={styles.selectQuantityContainer}>
						<button className={styles.operationBtn} onClick={() => handleNumberOfProduct("decrement")}>
							<Image src={minusIcon} alt="minus" />
						</button>
						<span className={styles.quantityDisplay}>{numberOfProduct}</span>
						<button className={styles.operationBtn} onClick={() => handleNumberOfProduct("increment")}>
							<Image src={plusIcon} alt="plus" />
						</button>
						<button className={styles.addButton}>Add to Cart</button>
					</div>
				</div>
			</div>
			<div className={styles.reviewsSection}>
				<div className={styles.header}>
					<h3 className={styles.allReviews}>
						All Reviews <span className={styles.counter}>({counter})</span>
					</h3>
					<div className={styles.sortAndWriteContainer}>
						<div className={styles.dropDownWrapper}>
							<select
								onChange={(e) => setSortOption(e.target.value as "latest" | "oldest" | "highToLow" | "lowToHigh")}
								className={styles.sortSelect}
							>
								<option value="latest">Latest</option>
								<option value="oldest">Oldest</option>
								<option value="highToLow">Highest Rating</option>
								<option value="lowToHigh">Lowest Rating</option>
							</select>
							<Image src={downArrow} alt="sort-comments" className={styles.downArrow} />
						</div>
						<button className={styles.writeReviewBtn}>Write a Review</button>
					</div>
				</div>
				<div className={styles.commentCardsWrapper}>
					{sortedComments.map((comment, index) => {
						return (
							<CommentCard
								key={index}
								id={comment.id}
								rating={comment.rating}
								comment={comment.comment}
								reviewerName={comment.reviewerName}
								date={comment.date}
								style="product-page"
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};
