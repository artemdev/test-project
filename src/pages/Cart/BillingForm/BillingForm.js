import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import styles from "./billingForm.module.css";
import Confirmation from "../Confirmation";
import { useState } from "react";

export default function BillingForm() {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const handleSubmit = (e) => {
    setShowConfirmation(true);
  };
  return (
    <>
      <Card.Body className="p-lg-5 p-3">
        <Card.Title>Billing Information</Card.Title>

        <Form className="bg-white p-3">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              className={styles.required}
              placeholder="Enter Name"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              className={styles.required}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              required
              className={styles.required}
              type="text"
              pattern="^\+?1[ ]\d{2}[ ]\d{3}[ ]\d{2}$"
              placeholder="Enter Phone"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Country</Form.Label>
            <Form.Select required className={styles.required}>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>City</Form.Label>
            <Form.Control
              required
              className={styles.required}
              type="text"
              placeholder="Enter City"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control
              required
              className={styles.required}
              type="text"
              placeholder="Enter Address"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>ZIP</Form.Label>
            <Form.Control
              required
              className={styles.required}
              type="text"
              placeholder="Enter ZIP"
            />
          </Form.Group>
        </Form>
      </Card.Body>

      <Button
        onClick={handleSubmit}
        className="mx-5 mb-5"
        variant="primary"
        type="submit"
      >
        Next
      </Button>
      {showConfirmation && (
        <Confirmation setShowConfirmation={setShowConfirmation} />
      )}
    </>
  );
}
