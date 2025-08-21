
const ProductInfo = ({ product }) => {
  return (
    <div className="product-info">
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.unitPrice}</p>
      <p>Quantity: {product.quantity}</p>
    </div>
  );
};

export default ProductInfo;