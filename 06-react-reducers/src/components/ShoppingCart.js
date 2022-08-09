import { useReducer } from "react";
import { TYPE } from "../actions/shoppingActions";
import {
  shoppingInitialState,
  shoppingReducer,
} from "../reducers/shoppingReducer";
import CartItem from "./CartItem";
import ProductItem from "./ProductItem";

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const { products, cart } = state;

  const addToCart = (id) => dispatch({ type: TYPE.ADD_TO_CART, payload: id });

  const delFromCart = ({ id, removAction }) => {
    removAction === "removeOne"
      ? dispatch({ type: TYPE.REMOVE_ONE_FROM_CART, payload: id })
      : dispatch({ type: TYPE.REMOVE_ALL_FROM_CART, payload: id });
  };

  const clearCart = () => dispatch({ type: TYPE.CLEAR_CART });

  return (
    <div>
      <h2>ShoppingCart</h2>
      <h3>Productos</h3>
      <article className="box box-center grid-responsive">
        {products.map((product) => (
          <ProductItem key={product.id} data={product} addToCart={addToCart} />
        ))}
      </article>
      <h3>Carrito</h3>
      <article className="box">
        <button onClick={clearCart}>Limpiar carrito</button>
        {cart.map((el, i) => (
          <CartItem key={i} data={el} delFromCart={delFromCart} />
        ))}
      </article>
    </div>
  );
};
export default ShoppingCart;
