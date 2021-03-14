import React from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import products from "../products";

const ProductScreen = ({ match }) => {
  const product = products.find((p) => p._id === match.params.id);
  return (
    <div>
      <Link to="/" className="btn btn-sm btn-secondary my-3">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={6}>
          <h2>{product.name}</h2>
          <p className="my-3">
            <Rating value={product.rating} /> {product.numReviews} reviews
          </p>
          <h3 className="my-3">${product.price}</h3>
          {product.countInStock > 0 ? (
            <p className="text-success lead">In Stock</p>
          ) : (
            <p className="text-danger lead">Out of Stock</p>
          )}
          <p className="my-4">{product.description}</p>
          <Button variant="dark" size="lg" disabled={product.countInStock < 1}>
            Add To Cart
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default ProductScreen;
