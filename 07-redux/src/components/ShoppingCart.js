import { useDispatch, useSelector } from "react-redux";
import { cleanCart } from "../actions/shoppingActions";
import CartItem from "./CartItem";
import ProductItem from "./ProductItem";

const ShoppingCart = () => {
  const state = useSelector((state) => state.shoppingCart);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Shopping Cart</h2>
      <section className="products-section">
        {state.products.map((el) => {
          return (
            <ProductItem
              key={el.id}
              name={el.name}
              price={el.price}
              id={el.id}
            />
          );
        })}
      </section>
      <section className="cart-section">
        <button onClick={() => dispatch(cleanCart())}>LImpiar carrito</button>
        <div className="cart-container">
          {state.cart.map((el) => {
            return (
              <CartItem
                key={el.id}
                name={el.name}
                price={el.price}
                id={el.id}
                quantity={el.quantity}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};
export default ShoppingCart;
