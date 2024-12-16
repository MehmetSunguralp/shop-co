"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { CartProductCard } from "../CartProductCard/CartProductCard";
import styles from "./Checkout.module.scss";

const Checkout: React.FC = () => {
	const cartItems = useSelector((state: RootState) => state.cart.items);
	const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
	return (
		<section className={styles.checkout}>
			<h1>YOUR CART</h1>
			{cartItems.length === 0 ? (
				<p className={styles.emptyWarning}>Please add products to process</p>
			) : (
				<>
					<ul className={styles.cartItems}>
						{cartItems.map((item, index) => {
							return <CartProductCard item={item} key={index} />;
						})}
					</ul>
					<form className={styles.orderSummary}>
						<h2>Order Summary</h2>
						<span className={styles.feeRow}>
							<p className={styles.fee}>Subtotal</p>
							<p className={styles.price}>${totalPrice}</p>
						</span>
						<span className={styles.feeRow}>
							<p className={styles.fee}>Discount</p>
							<p className={styles.price}>${0}</p>
						</span>
						<span className={styles.feeRow}>
							<p className={styles.fee}>Delivery</p>
							<p className={styles.price}>${0}</p>
						</span>
						<hr className={styles.divider} />
						<span className={styles.feeRow}>
							<p className={`${styles.fee} ${styles.total}`}>Total</p>
							<p className={styles.price}>${totalPrice}</p>
						</span>
						<span className={styles.promoWrapper}>
							<div className={styles.promoCodeInputWrapper}>
								<input className={styles.promoCodeInput} type="text" placeholder="Promo Code" />
							</div>
							<button className={styles.applyPromoBtn}>Apply</button>
						</span>
						<button className={styles.goCheckoutBtn}>Go to Checkout</button>
					</form>
				</>
			)}
		</section>
	);
};

export default Checkout;
