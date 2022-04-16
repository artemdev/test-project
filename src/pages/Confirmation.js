import React from "react";
import styles from "./confirmation.module.css";
import Button from "react-bootstrap/Button";

import { emptyCart } from "../store/cart.js";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Confirmation(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    dispatch(emptyCart());
    navigate("/", { replace: true });
  };

  return (
    <div className={styles.container}>
      <h2>Confirmation</h2>
      <div className="total"></div>
      <Button onClick={handleClick}>Confirm order</Button>
    </div>
  );
}
