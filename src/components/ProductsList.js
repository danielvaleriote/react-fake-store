import { Card, Button } from "react-bootstrap";
import "./ProductsList.css";
import StarRatings from "react-star-ratings";

const ProductsList = ({ products }) => {
  return (
    <ul className="products-container mt-5">
      {products.map(({ image, id, title, price, rating }) => {
        return (
          <li key={id}>
            <Card>
              <Card.Img
                variant="top"
                src={image || "https://via.placeholder.com/350x150"}
              />
              <Card.Title>{title}</Card.Title>
              <div className="productPriceAndRating mb-3">
                <h4 className="text-success mb-0">{`$${price}`}</h4>
                <div className="stars-container">
                  <abbr title={rating.rate}>
                    <StarRatings
                      numberOfStars={5}
                      rating={Number(rating.rate)}
                      starRatedColor="yellow"
                      emptyStarColor="grey"
                      name="rating"
                      starDimension="20px"
                      starSpacing="0px"
                    />
                  </abbr>{" "}
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
