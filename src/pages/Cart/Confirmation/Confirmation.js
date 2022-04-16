import React from "react";
import styles from "./Confirmation.module.css";
import Button from "react-bootstrap/Button";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { emptyCart } from "../../../store/cart/cart-slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { priceWithDiscount } from "../../../helpers/products.js";
import { useSelector } from "react-redux";
import { getCartProducts } from "../../../store/cart/cart-selectors";

export default function Confirmation({ setShowConfirmation }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const products = useSelector(getCartProducts);
  const handleConfirm = () => {
    dispatch(emptyCart());
    navigate("/", { replace: true });
  };

  const handleCancel = () => {
    setShowConfirmation(false);
  };

  const showTotalAmount = (products) => {
    return products.reduce((acc, product) => {
      acc += priceWithDiscount(product);
      return acc;
    }, 0);
  };

  const totalQuantity = (products) => {
    return products.reduce((acc, item) => {
      if (item.quantity) {
        acc += item.quantity;
      }
      return acc;
    }, 0);
  };

  return (
    <div className={styles.container}>
      <Col className="d-flex align-items-center justify-center flex-column">
        <Row className={styles.total}>
          You are going to purchase {totalQuantity(products)} products with
          total amount of ${showTotalAmount(products)}
        </Row>
        <Row>
          <Button className={styles.btn} onClick={handleConfirm}>
            Confirm
          </Button>
          <Button className={styles.btn} onClick={handleCancel}>
            Cancel
          </Button>
        </Row>
      </Col>
    </div>
  );
}
