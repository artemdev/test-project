import { useDispatch } from "react-redux";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import OldPrice from "./OldPrice";
import ApplyCouponBtn from "../ApplyCouponBtn";

import {
  removeProduct,
  increaseQuantity,
  decreaseQuantity,
} from "../../../store/cart/cart-slice";
import { priceWithDiscount } from "../../../helpers/products.js";

export default function CartProduct({
  product,
  handleShow,
  setCurrentProduct,
}) {
  const dispatch = useDispatch();

  const totalPrice = (product.price * product.quantity).toFixed(2);
  const addCurrentProduct = () => {
    handleShow();
    setCurrentProduct(product);
  };

  const removeCurrentProduct = () => {
    dispatch(removeProduct(product));
  };

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
            <span className="text-black-50 my-2">Product Code:</span>{" "}
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
            show={+priceWithDiscount(product) != +totalPrice}
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
              onClick={() => dispatch(increaseQuantity({ id: product.id }))}
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
              onClick={() => dispatch(decreaseQuantity({ id: product.id }))}
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
            disabled={!product.vouchers.length}
            addCurrentProduct={addCurrentProduct}
          />
        </Col>
        <Col
          className="d-flex justify-content-center align-items-center"
          md={2}
          xs={6}
        >
          <Button onClick={removeCurrentProduct} variant="danger" size="sm">
            Remove
          </Button>
        </Col>
      </Row>
      <hr className="text-black-50 my-2"></hr>
    </div>
  );
}
