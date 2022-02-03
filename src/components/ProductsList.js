import { Card, Button } from "react-bootstrap";
import "./ProductsList.css";
import StarRatingComponent from "react-star-rating-component";

const ProductsList = ({ products }) => {
  return (
    <ul className="products-container mt-5">
      {products.map(({ image, id, title, price, description, rating }) => {
        return (
          <li key={id}>
            <Card>
              <Card.Img
                variant="top"
                src={image || "https://via.placeholder.com/350x150"}
              />
              <Card.Title>{title}</Card.Title>
              <div className="productPriceAndRating">
                <h4 className="text-success mb-0">{`$${price}`}</h4>
                <div className="stars-container">
                  <StarRatingComponent
                    name="rate"
                    value={Number(rating.rate)}
                    starColor="yellow"
                    emptyStarColor="grey"
                    size={40}
                  />{" "}
                  ({rating.count})
                </div>
              </div>
              <Button variant="outline-primary">Buy</Button>
            </Card>
          </li>
        );
      })}
    </ul>
  );
};

export default ProductsList;
