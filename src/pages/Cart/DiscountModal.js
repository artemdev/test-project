import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function DiscountModal({
  show,
  handleClose,
  changeCouponId,
  applyVoucherAndClose,
}) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Product Coupon</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="text"
            onChange={changeCouponId}
            placeholder="Enter coupon code"
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={applyVoucherAndClose}>
          Apply Coupon
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
