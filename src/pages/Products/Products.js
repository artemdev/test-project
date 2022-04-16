import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import ListGroup from "react-bootstrap/ListGroup";
import Product from "./Product";
import { PER_PAGE } from "../../config";

import { fetchProducts } from "../../store/products/products-operations";
import { getProducts } from "../../store/products/products-selectors";

function Products({ currentProducts }) {
  return (
    <ListGroup as="ol" className="w-75 mx-auto">
      {currentProducts &&
        currentProducts.map((product) => {
          return (
            <div key={product.id}>
              <Product product={product} />
            </div>
          );
        })}
    </ListGroup>
  );
}

export default function PaginatedProducts({ itemsPerPage = PER_PAGE }) {
  const products = useSelector(getProducts);
  const [currentItems, setCurrentItems] = useState(products);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(products.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(products.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, products]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Products currentProducts={currentItems} />
      <ReactPaginate
        className="w-75 mx-auto"
        breakLabel="..."
        nextLabel="next >"
        itemsPerPage={5}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}
