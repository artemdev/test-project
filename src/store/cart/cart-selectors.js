export const getCartProducts = (state) => state.cart.products;
export const appliedCoupons = (state) => state.cart.appliedCoupons;

const cartSelectors = {
  getCartProducts,
  appliedCoupons,
};

export default cartSelectors;
