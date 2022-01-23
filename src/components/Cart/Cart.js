import style from "./Cart.module.css";
import Modal from "../UI/Modal";
const Cart = (props) => {
  const cartItems = (
    <ul className={style["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={style.total}>
        <span>Total Amount</span>
        <span>32.43</span>
      </div>
      <div className={style.actions}>
        <button onClick={props.onClose} className={style["button--alt"]}>
          Close
        </button>
        <button className={style.button}>Order</button>
      </div>
    </Modal>
  );
};
export default Cart;
