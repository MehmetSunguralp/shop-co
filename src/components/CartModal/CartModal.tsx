import ReactModal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { clearCart, removeFromCart } from "@/store/slices/cartSlice";
import styles from "./CartModal.module.scss";

interface CartModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onRequestClose }) => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
  const dispatch = useDispatch();

  const handleRemoveItem = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
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
                <div>
                  <p>Size: {item.size}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ${item.price}</p>
                </div>
                <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
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
