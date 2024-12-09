import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import { RootState } from "@/store";
import { clearCart, removeFromCart, updateQuantity } from "@/store/slices/cartSlice";
import { CartItem } from "@/types/CartProps";
import minusIcon from "@/public/common/minus.svg";
import plusIcon from "@/public/common/plus.svg";
import trashIcon from "@/public/common/trash.svg";
import styles from "@/components/CartProductCard/CartProductCard.module.scss";

export const CartProductCard = ({ item }: { item: CartItem }) => {
	const cartItems = useSelector((state: RootState) => state.cart.items);
	const dispatch = useDispatch();
	const handleRemoveItem = (id: number, size: string) => {
		dispatch(removeFromCart({ id, size }));
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
		<li key={item.id} className={styles.cartItem}>
			<div className={styles.cartItemDetails}>
				<div className={styles.thumbnailWrapper}>
					<Image src={item.thumbnail} alt={item.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
				</div>
				<div className={styles.textInfo}>
					<h3 className={styles.productTitle}>{item.title}</h3>
					<p className={styles.size}>
						Size: <span>{item.size}</span>
					</p>
					<p className={styles.price}>${item.price.toFixed(2)}</p>
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
			<div className={styles.removeItem} onClick={() => handleRemoveItem(item.id, item.size)}>
				<Image src={trashIcon} alt="trash" />
			</div>
		</li>
	);
};
