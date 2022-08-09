import { useDispatch } from "react-redux";
import { addCart } from "../actions/shoppingActions";
const ProductItem = ({ name, price, id }) => {
  const dispatch = useDispatch();

  return (
    <article>
      <h3>Products</h3>
      <div>
        <p>{name}</p>
        <p>Q{price}.00</p>
        <button onClick={() => dispatch(addCart(id))}>Agregar</button>
      </div>
    </article>
  );
};
export default ProductItem;
