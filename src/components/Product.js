import "./Product.css";

export default function Product({ obj }) {
  const { title, price, description, category, image, rating } = obj;
  return (
    <div className="product-item">
      <img src={image} alt={title} />
      <article className="product-info">
        <h3>{title}</h3>
        <p>{`$${price}`}</p>
      </article>
    </div>
  );
}
