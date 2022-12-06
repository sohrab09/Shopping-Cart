import React from "react";
import products from "../data/products.json";
import { Row, Col } from "react-bootstrap";
import { StoreItems } from "../Components/StoreItem";

const Store = () => {
  return (
    <>
      <h1>Store</h1>
      <Row lg={3} md={2} xs={1} className="g-3">
        {products.map((product, index) => (
          <Col key={index}>
            <StoreItems {...product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;
