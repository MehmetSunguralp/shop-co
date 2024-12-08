import ReactModal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import Image from "next/image";
import { clearCart, removeFromCart, updateQuantity } from "@/store/slices/cartSlice";
import minusIcon from "@/public/common/minus.svg"
import plusIcon from "@/public/common/plus.svg"
import styles from "./CartModal.module.scss";

interface CartModalProps {
	isOpen: boolean;
	onRequestClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onRequestClose }) => {
	const cartItems = useSelector((state: RootState) => state.cart.items);
	const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
	const dispatch = useDispatch();

	const handleRemoveItem = (id: number, size: string) => {
		dispatch(removeFromCart({ id, size }));
	};

	const handleClearCart = () => {
		dispatch(clearCart());
	};

	const handleIncrementQuantity = (id: number, size: string) => {
		dispatch(updateQuantity({ id, size, quantity: 1 }));
	};

	const handleDecrementQuantity = (id: number, size: string) => {
		const item = cartItems.find((item) => item.id === id && item.size === size);
		if (item && item.quantity > 1) {
			dispatch(updateQuantity({ id, size, quantity: -1 }));
		}
	};
	return (
		<ReactModal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			className={styles.modalContent}
			overlayClassName={styles.modalOverlay}
		>
			<div className={styles.cartModal}>
				<h2>Your Cart</h2>
				{cartItems.length === 0 ? (
					<p>Your cart is empty.</p>
				) : (
					<ul>
						{cartItems.map((item) => (
							<li key={item.id} className={styles.cartItem}>
								<div className={styles.cartItemDetails}>
									{/* Display product thumbnail */}
									<Image src={item.thumbnail} alt={item.title} width={100} height={100} className={styles.cartItemThumbnail} />

									<div className={styles.textInfo}>
										{/* Display product title */}
										<h3>{item.title}</h3>

										{/* Display product size and price */}
										<p>Size: {item.size}</p>
										<p>Price: ${item.price.toFixed(2)}</p>
									</div>
								</div>

								<div className={styles.selectQuantityContainer}>
									<button className={styles.operationBtn} onClick={() => handleDecrementQuantity(item.id, item.size)}>
										<Image src={minusIcon} alt="minus" />
									</button>
									<span className={styles.quantityDisplay}>{item.quantity}</span>

									<button className={styles.operationBtn} onClick={() => handleIncrementQuantity(item.id, item.size)}>
										<Image src={plusIcon} alt="plus" />
									</button>
								</div>

								<div className={styles.actions}>
									<button onClick={() => handleRemoveItem(item.id, item.size)}>Remove</button>
								</div>
							</li>
						))}
					</ul>
				)}
				<div className={styles.cartSummary}>
					<h3>Total Price: ${totalPrice.toFixed(2)}</h3>
				</div>
				<div className={styles.actions}>
					<button onClick={handleClearCart}>Clear Cart</button>
					<button onClick={onRequestClose}>Close</button>
				</div>
			</div>
		</ReactModal>
	);
};

export default CartModal;
