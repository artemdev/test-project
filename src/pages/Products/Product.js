import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { addProduct } from "../../store/cart/cart-slice";

import { useDispatch } from "react-redux";

export default function Product({ product }) {
  const dispatch = useDispatch();

  return (
    <ListGroup.Item as="li" className="p-3">
      <Row>
        <Col md={2}>
          <Image src={product.image} alt={product.name} fluid rounded />
        </Col>
        <Col md={10} className="d-flex flex-column justify-content-center">
          <h5 className="mt-0 font-weight-bold mb-2">{product.name}</h5>
          <p className="font-italic text-muted mb-0 small mb-3">
            {product.short_description}
          </p>
          <div className="d-flex align-items-center justify-content-between mt-1">
            <h6 className="font-weight-bold my-2">{product.price}</h6>
            <Button
              onClick={() => {
                dispatch(addProduct(product));
              }}
              variant="outline-primary"
              size="sm"
              style={{
                fontSize: "0.7rem",
              }}
            >
              Add to Cart
            </Button>
          </div>
        </Col>
      </Row>
    </ListGroup.Item>
  );
}
