import { useDispatch } from "react-redux";
import { removeCart } from "../actions/shoppingActions";

const CartItem = ({ name, price, id, quantity }) => {
  const dispatch = useDispatch();
  return (
    <article style={{ marginTop: "1rem" }}>
      <h3>{name}</h3>
      <p>
        Q{price}.00 * {quantity} = {price * quantity}
      </p>
      <p>Cantidad {quantity} </p>
      <button onClick={() => dispatch(removeCart(id))}>Eliminar Uno</button>
      <button onClick={() => dispatch(removeCart(id, true))}>
        Eliminar Todos
      </button>
    </article>
  );
};
export default CartItem;
