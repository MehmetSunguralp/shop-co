import React from "react";
import Image from "next/image";
import styles from "./Hero.module.scss";
import heroImage from "@/public/Hero/hero.png";

export const Hero: React.FC = () => {
	return (
		<section className={styles.hero}>
			<div className={styles.textContent}>
				<h1>FIND CLOTHES THAT MATCH YOUR STYLE</h1>
				<p>
					Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to
					your sense of style.
				</p>
				<button>Shop Now</button>
				<div className={styles.statsWrapper}>
					<span>
						<p className={styles.statsNum}>200+</p>
						<p className={styles.statsLabel}>International Brands</p>
					</span>
					<span>
						<p className={styles.statsNum}>2,000+</p>
						<p className={styles.statsLabel}>High-Quality Products</p>
					</span>
					<span>
						<p className={styles.statsNum}>30,000+</p>
						<p className={styles.statsLabel}>Happy Customers</p>
					</span>
				</div>
			</div>
			<div className={styles.heroImageWrapper}>
				<Image src={heroImage} alt="trendy-woman" fill />
			</div>
		</section>
	);
};
