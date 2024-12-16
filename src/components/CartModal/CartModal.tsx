import Image from "next/image";
import ReactModal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { clearCart } from "@/store/slices/cartSlice";
import { CartProductCard } from "../CartProductCard/CartProductCard";
import crossIcon from "@/public/common/cross.svg";
import styles from "./CartModal.module.scss";
import Link from "next/link";

interface CartModalProps {
	isOpen: boolean;
	onRequestClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onRequestClose }) => {
	const cartItems = useSelector((state: RootState) => state.cart.items);
	const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
	const dispatch = useDispatch();
	const handleClearCart = () => {
		dispatch(clearCart());
	};
	const directToCartPage = () => {
		onRequestClose();
	};
	return (
		<ReactModal
			ariaHideApp={false}
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			className={styles.modalContent}
			overlayClassName={styles.modalOverlay}
		>
			<div className={styles.cartModal}>
				<button onClick={onRequestClose} className={styles.closeBtn}>
					<Image src={crossIcon} alt="close-modal" />
				</button>
				<h2 className={styles.yourCart}>Your Cart</h2>
				{cartItems.length === 0 ? (
					<p className={styles.emptyWarning}>Please add products to process</p>
				) : (
					<>
						<ul>
							{cartItems.map((item, index) => {
								return <CartProductCard item={item} key={index} />;
							})}
						</ul>
						<div className={styles.cartSummary}>
							<h3 className={styles.totalPrice}>Total Price: ${totalPrice.toFixed(2)}</h3>
							<button onClick={handleClearCart} className={styles.clearBtn}>
								Clear Cart
							</button>
							<Link href={"/cart"} onClick={directToCartPage} className={styles.clearBtn}>
								Checkout
							</Link>
						</div>
					</>
				)}
			</div>
		</ReactModal>
	);
};

export default CartModal;
