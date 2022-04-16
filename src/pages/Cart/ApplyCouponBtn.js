import Button from "react-bootstrap/Button";

export default function ApplyCouponBtn({ disabled, addCurrentProduct }) {
  return (
    <Button
      disabled={disabled}
      size="sm"
      variant="secondary"
      onClick={addCurrentProduct}
    >
      Apply Coupon
    </Button>
  );
}
