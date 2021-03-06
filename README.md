# Specifications

- Products page
  - DONE A list with products (image, name, short description, price) and button to add in cart any product
  - DONE List must implement pagination (5 items per page)
- Checkout pages
  - A list with products from cart (image, name, price)
    - DONE Input to change quantity for each product
    - DONE Button to remove product from cart
    - DONE Button to add a voucher to each individual product (voucher is applicable per product)
    - DONE Some products must not allow adding voucher, the button must be hidden
    - DONE After a voucher is applied the product price must be changed accordingly (show both: price before and after)
  * A form with billing information
    - DONE Name
    - DONE Email
    - DONE Phone (validate only format like: +X XX XXX XX)
    - DONE Address (Country, City, Address, Zip)
    - DONE All fields are required
  * Next Button
- Confirmation Page
  - DONE The page must show a message with products count and total price to pay
  - DONE Button to confirm (will reset cart and redirect to products page)
  - DONE The page is accessible only after user click on 'Next' from Checkout page

# Requirements:

- Code Style
- Best Practices
- React Hooks
- Redux
- React Router
- Bootstrap
- Input Validations

# Boilerplate

- Products data is stored in `src/data/products.json`
- Routing is in `src/App.js`
- UI is prepared for `src/pages/Cart.js` and `src/pages/Products.js`
- Redux is initialised in `src/store`
