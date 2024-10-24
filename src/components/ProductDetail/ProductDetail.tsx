"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { fetchProducts } from "@/api/api";
import { ProductDetailProps } from "@/types/ProductDetailProps";
import styles from "./ProductDetail.module.scss";
import starIcon from "@/public/common/star.svg";
import plusIcon from "@/public/common/plus.svg";
import minusIcon from "@/public/common/minus.svg";

export const ProductDetail: React.FC<{ productId: string }> = ({ productId }) => {
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

	// Fetch products and find the matching product by productId
	useEffect(() => {
		fetchProducts().then((data) => {
			const foundProduct = data.products.find((p: { id: string }) => p.id == productId);
			setProduct(foundProduct || null);
			if (foundProduct) {
				setMainImage(foundProduct.images[0]);
			}
		});
	}, [productId]);

	if (!product) {
		return <div>Loading product details...</div>;
	}

	// Count rating stars
	const starCounter = Array(Math.round(product.rating)).fill(0);

	// Handle old price and discount visibility
	const discount = Math.floor(product.discountPercentage);
	const newPrice = discount !== 0 ? product.price - (product.price * discount) / 100 : product.price;
	const visibility = discount === 0 ? "none" : "block";

	return (
		<div className={styles.productDetail}>
			<div className={styles.productImagesSection}>
				<div className={styles.thumbnailsContainer}>
					{product.images.map((image, index) => (
						<div key={index} className={styles.thumbnailWrapper} onClick={() => setMainImage(image)}>
							<Image src={image} alt={product.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
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
					/>
				</div>
			</div>
			<div className={styles.textDetails}>
				<h1 className={styles.productTitle}>{product.title}</h1>
				<div className={styles.ratingContainer}>
					{starCounter.map((_, index) => (
						<Image src={starIcon} alt="star" key={index} />
					))}
					<span className={styles.rating}>
						{Math.round(product.rating)}/<span>5</span>
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
						<span className={styles.colorCirle}></span>
						<span className={styles.colorCirle}></span>
						<span className={styles.colorCirle}></span>
					</div>
				</div>
				<div className={styles.sizePickingArea}>
					<p className={styles.sectionTitle}>Choose Size</p>
					<div className={styles.sizeWrapper}>
						<label className={styles.sizeLabel}>
							<input type="radio" name="size" value="Small" checked={selectedSize === "Small"} onChange={handleSizeChange} />
							<span className={styles.size}>Small</span>
						</label>
						<label className={styles.sizeLabel}>
							<input type="radio" name="size" value="Medium" checked={selectedSize === "Medium"} onChange={handleSizeChange} />
							<span className={styles.size}>Medium</span>
						</label>
						<label className={styles.sizeLabel}>
							<input type="radio" name="size" value="Large" checked={selectedSize === "Large"} onChange={handleSizeChange} />
							<span className={styles.size}>Large</span>
						</label>
						<label className={styles.sizeLabel}>
							<input type="radio" name="size" value="X-Large" checked={selectedSize === "X-Large"} onChange={handleSizeChange} />
							<span className={styles.size}>X-Large</span>
						</label>
					</div>
				</div>

				<div className={styles.selectQuantityContainer}>
					<button className={styles.operationBtn} onClick={() => handleNumberOfProduct("decrement")}>
						<Image src={minusIcon} alt="minus" />
					</button>
					<span>{numberOfProduct}</span>
					<button className={styles.operationBtn} onClick={() => handleNumberOfProduct("increment")}>
						<Image src={plusIcon} alt="plus" />
					</button>
					<button className={styles.addButton}>Add to Cart</button>
				</div>
			</div>
		</div>
	);
};
