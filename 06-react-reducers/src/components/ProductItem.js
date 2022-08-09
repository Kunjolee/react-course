const Product = ({ data, addToCart }) => {
  const { id, name, price } = data;
  return (
    <div style={{ margin: "1rem", padding: "1rem", border: "solid thin gray" }}>
      <h4>{name}</h4>
      <h5>Q{price}.00</h5>
      <button onClick={() => addToCart(id)}>Agregar al carrito</button>
    </div>
  );
};
export default Product;
