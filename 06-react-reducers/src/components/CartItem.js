const CartItem = ({ data, delFromCart }) => {
  let { name, price, id, quantity } = data;

  return (
    <div style={{ borderBottom: "thin solid gray" }}>
      <h4>{name}</h4>
      <h5>
        Q{price}.00 * {quantity} = Q{quantity * price}.00
      </h5>
      <h5>Cant: {quantity}</h5>
      <button onClick={() => delFromCart({ id, removAction: "removeOne" })}>
        Eliminar uno
      </button>
      <button onClick={() => delFromCart({ id, removAction: "removeAll" })}>
        Eliminar todos
      </button>
    </div>
  );
};
export default CartItem;
