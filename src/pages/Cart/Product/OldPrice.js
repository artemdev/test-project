export default function OldPrice({ price, show = false }) {
  return show ? (
    <h6 className="mb-0 text-black-50">
      <strike>$ {price}</strike>
    </h6>
  ) : null;
}
