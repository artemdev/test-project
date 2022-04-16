export const priceWithDiscount = (product) => {
  const totalPrice = (product.price * product.quantity).toFixed(2);

  if (!product.vouchers) {
    return totalPrice;
  }

  const discount = product.vouchers.reduce((acc, voucher) => {
    product.appliedVouchers.includes(voucher) && (acc += voucher.discount);
    return acc;
  }, 0);

  return totalPrice - discount > 0 ? totalPrice - discount : 0;
};
