import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";

import OldPrice from "./OldPrice";
import ApplyCouponBtn from "./ApplyCoupon";
import DiscountModal from "./DiscountModal";

import {
  getCardProducts,
  currentProduct,
  currentCoupon,
  appliedCoupons,
} from "../store/card-selectors.js";
import {
  increaseQuantity,
  decreaseQuantity,
  removeProduct,
  applyVoucher,
  setCurrentProduct,
  setCurrentCoupon,
} from "../store/cart.js";

export default function Cart() {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const priceWithDiscount = (product) => {
    const totalPrice = Math.ceil(product.price * product.quantity);

    if (!product.vouchers) {
      return totalPrice;
    }

    const discount = product.vouchers.reduce((acc, voucher) => {
      product.appliedVouchers.includes(voucher) && (acc += voucher.discount);
      return acc;
    }, 0);

    return totalPrice - discount;
  };

  const addCurrentProduct = (product) => {
    setShow(true);
    dispatch(setCurrentProduct(product));
  };
  const changeCouponId = (e) => {
    const couponName = e.target.value;
    dispatch(setCurrentCoupon(couponName));
  };

  const handleShow = (product, couponId) => {
    setShow(true);
  };
  const products = useSelector(getCardProducts);
  const product = useSelector(currentProduct);
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
                  const totalPrice = Math.ceil(
                    product.price * product.quantity
                  );
                  return (
                    <div key={"card" + product.id}>
                      <Row className="py-2 m-0">
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
                          <h6 className="mb-0">{product.name}</h6>
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
                          <h6 className="mb-0 me-2 text-danger">
                            ${priceWithDiscount(product)}
                          </h6>

                          <OldPrice
                            show={priceWithDiscount(product) !== totalPrice}
                            price={totalPrice}
                          />
                        </Col>
                        <Col
                          className="d-flex justify-content-center align-items-center py-2"
                          md={2}
                          xs={6}
                        >
                          <InputGroup size="sm" style={{ width: "5rem" }}>
                            <Button
                              onClick={() =>
                                dispatch(increaseQuantity({ id: product.id }))
                              }
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
                              readOnly={product.quantity}
                            />

                            <Button
                              variant="outline-secondary"
                              onClick={() =>
                                dispatch(decreaseQuantity({ id: product.id }))
                              }
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
                          <ApplyCouponBtn
                            disabled={
                              product.vouchers.length > 0 ? false : true
                            }
                            product={product}
                            applyCoupon={applyVoucher}
                            handleShow={handleShow}
                            handleClose={handleClose}
                            addCurrentProduct={() => {
                              addCurrentProduct(product);
                            }}
                          />
                        </Col>
                        <Col
                          className="d-flex justify-content-center align-items-center"
                          md={2}
                          xs={6}
                        >
                          <Button
                            onClick={() => {
                              dispatch(removeProduct(product));
                            }}
                            variant="danger"
                            size="sm"
                          >
                            Remove
                          </Button>
                        </Col>
                      </Row>
                      <hr className="text-black-50 my-2"></hr>
                    </div>
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
      <DiscountModal
        changeCouponId={changeCouponId}
        show={show}
        handleClose={handleClose}
        applyCoupon={() => {
          dispatch(applyVoucher(product.id));
          handleClose();
        }}
      />
    </>
  );
}
