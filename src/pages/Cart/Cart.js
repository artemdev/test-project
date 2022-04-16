import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";

import DiscountModal from "./DiscountModal";
import CartProduct from "./Product";
import BillingForm from "./BillingForm";

import { getCartProducts } from "../../store/cart/cart-selectors.js";
import { applyVoucher } from "../../store/cart/cart-slice";

export default function Cart() {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [currentCoupon, setCurrentCoupon] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const changeCouponId = (e) => {
    const { value } = e.target;
    setCurrentCoupon(value);
  };

  const applyVoucherAndClose = () => {
    dispatch(applyVoucher({ currentProduct, currentCoupon }));
    handleClose();
  };
  const products = useSelector(getCartProducts);
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
                        handleShow={handleShow}
                        product={product}
                        setCurrentProduct={setCurrentProduct}
                      />
                    </div>
                  );
                })}
                {!products.length && <h2>Products not found</h2>}
              </Container>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>

        {!!products.length && <BillingForm />}
      </Card>
      <DiscountModal
        changeCouponId={changeCouponId}
        show={show}
        handleClose={handleClose}
        applyVoucherAndClose={applyVoucherAndClose}
      />
    </>
  );
}
