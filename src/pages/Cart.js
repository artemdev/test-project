import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Modal from "react-bootstrap/Modal";

import { getCardProducts } from "../store/card-selectors.js";
import {
  increaseQuantity,
  descreaseQuantity,
} from "../store/card-selectors.js";
export default function Cart() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const products = useSelector(getCardProducts);
  return (
    <>
      <Card
        className="w-75 rounded-full border-0"
        style={{ margin: "auto", background: "#f3f3f3" }}
      >
        <Card.Body className="p-3 p-lg-5">
          <Card.Title>Shopping cart</Card.Title>

          <ListGroup as="ol" style={{ marginTop: "1rem" }}>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start border-0 p-0"
            >
              <Container fluid="md" className="p-2">
                {products.map((product) => {
                  return (
                    <>
                      <Row key={product.id} className="py-2 m-0">
                        <Col md={1} xs={6}>
                          <Image
                            style={{ maxHeight: "6rem" }}
                            className="d-block mx-auto"
                            src={product.image}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col
                          className="d-flex flex-column justify-content-center"
                          md={3}
                          xs={6}
                        >
                          <h6 className="mb-0">Product name</h6>
                          <small style={{ fontSize: "0.7rem" }}>
                            <span className="text-black-50 my-2">
                              Product Code:
                            </span>{" "}
                            <span
                              style={{
                                fontWeight: "500",
                              }}
                            >
                              {product.id}
                            </span>
                          </small>
                        </Col>
                        <Col
                          className="d-flex justify-content-center align-items-center"
                          md={2}
                          xs={6}
                        >
                          <h6 className="mb-0 me-2 text-danger">$12.00</h6>
                          <h6 className="mb-0 text-black-50">
                            <strike>${product.price}</strike>
                          </h6>
                        </Col>
                        <Col
                          className="d-flex justify-content-center align-items-center py-2"
                          md={2}
                          xs={6}
                        >
                          <InputGroup size="sm" style={{ width: "5rem" }}>
                            <Button
                              onClick={increaseQuantity}
                              variant="outline-secondary"
                              style={{
                                fontSize: "0.6rem",
                              }}
                            >
                              <i className="fa fa-plus"></i>
                            </Button>
                            <Form.Control
                              size="sm"
                              className="border-secondary text-center px-0"
                              style={{
                                fontSize: "0.7rem",
                              }}
                              placeholder={product.quantity}
                            />

                            <Button
                              variant="outline-secondary"
                              className={decreaseQuantity}
                              style={{
                                fontSize: "0.6rem",
                              }}
                            >
                              <i className="fa fa-minus"></i>
                            </Button>
                          </InputGroup>
                        </Col>
                        <Col
                          className="d-flex justify-content-center align-items-center"
                          md={2}
                          xs={6}
                        >
                          <Button
                            size="sm"
                            variant="secondary"
                            onClick={handleShow}
                          >
                            Apply Coupon
                          </Button>
                        </Col>
                        <Col
                          className="d-flex justify-content-center align-items-center"
                          md={2}
                          xs={6}
                        >
                          <Button variant="danger" size="sm">
                            Remove
                          </Button>
                        </Col>
                      </Row>
                      <hr className="text-black-50 my-2"></hr>
                    </>
                  );
                })}
              </Container>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>

        <Card.Body className="p-lg-5 p-3">
          <Card.Title>Billing Information</Card.Title>

          <Form className="bg-white p-3">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="text" placeholder="Enter Phone" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Country</Form.Label>
              <Form.Select>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="Enter City" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Enter Address" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>ZIP</Form.Label>
              <Form.Control type="text" placeholder="Enter ZIP" />
            </Form.Group>
          </Form>
        </Card.Body>

        <Button className="mx-5 mb-5" variant="primary" type="submit">
          Next
        </Button>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Product Coupon</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Enter coupon code" />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Apply Coupon
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
