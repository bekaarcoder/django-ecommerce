import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import products from "../products";

const HomeScreen = () => {
  return (
    <div>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeScreen;
