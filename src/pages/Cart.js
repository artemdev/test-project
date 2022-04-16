import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Card from "react-bootstrap/Card";

import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";

import DiscountModal from "./DiscountModal";
import CartProduct from "./CartProduct";
import BillingForm from "./BillingForm";

import { getCardProducts } from "../store/card-selectors.js";
import { applyVoucher, setCurrentCoupon } from "../store/cart.js";

export default function Cart() {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  // const [currentProuct, setCurrentProduct] = useState(null)
  const handleClose = () => setShow(false);

  const changeCouponId = (e) => {
    const couponName = e.target.value;
    dispatch(setCurrentCoupon(couponName));
  };
  const handleShow = (product, couponId) => {
    setShow(true);
  };
  const products = useSelector(getCardProducts);
  // const product = useSelector(currentProduct);
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
                    <div key={"card" + product.id}>
                      <CartProduct
                        handleClose={handleClose}
                        setShow={setShow}
                        handleShow={handleShow}
                        applyVoucher={applyVoucher}
                        product={product}
                        setCurrentProduct={setCurrentProduct}
                      />
                    </div>
                  );
                })}
              </Container>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>

        <BillingForm />
      </Card>
      <DiscountModal
        changeCouponId={changeCouponId}
        show={show}
        handleClose={handleClose}
        applyCoupon={() => {
          dispatch(applyVoucher(currentProduct.id));
          handleClose();
        }}
      />
    </>
  );
}
