import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import products from "../data/products.json";
import ReactPaginate from "react-paginate";
import { PER_PAGE } from "../config";

import productsOperations from "../store/products-operations";
import { addProduct } from "../store/cart.js";

function Products({ currentProducts }) {
  const dispatch = useDispatch();

  return (
    <ListGroup as="ol" className="w-75 mx-auto">
      {currentProducts &&
        currentProducts.map((product) => {
          return (
            <ListGroup.Item as="li" className="p-3" key={product.id}>
              <Row>
                <Col md={2}>
                  <Image src={product.image} alt={product.name} fluid rounded />
                </Col>
                <Col
                  md={10}
                  className="d-flex flex-column justify-content-center"
                >
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
        })}
      {/* <ListGroup.Item as="li" className="p-3">
        <Row>
          <Col md={2}>
            <Image
              src="https://loremflickr.com/480/600/product?random=0"
              alt="Generic placeholder"
              fluid
              rounded
            />
          </Col>
          <Col md={10} className="d-flex flex-column justify-content-center">
            <h5 className="mt-0 font-weight-bold mb-2">Soprano</h5>
            <p className="font-italic text-muted mb-0 small mb-3">
              Irure tempor quis esse ipsum nostrud nostrud non exercitation id
              esse adipisicing laborum ullamco. Magna magna aliquip officia
              nulla consectetur dolor pariatur elit occaecat esse Lorem ullamco
              aute.
            </p>
            <div className="d-flex align-items-center justify-content-between mt-1">
              <h6 className="font-weight-bold my-2">$1127.95</h6>
              <Button
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
      <ListGroup.Item as="li" className="p-3">
        <Row>
          <Col md={2}>
            <Image
              src="https://loremflickr.com/480/600/product?random=1"
              alt="Generic placeholder"
              fluid
              rounded
            />
          </Col>
          <Col md={10} className="d-flex flex-column justify-content-center">
            <h5 className="mt-0 font-weight-bold mb-2">Cubix</h5>
            <p className="font-italic text-muted mb-0 small mb-3">
              Incididunt nisi cupidatat voluptate in minim adipisicing cupidatat
              proident Lorem. Non Lorem eu sint excepteur et ipsum.
            </p>
            <div className="d-flex align-items-center justify-content-between mt-1">
              <h6 className="font-weight-bold my-2">$1394.95</h6>
              <Button
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
      </ListGroup.Item> */}
    </ListGroup>
  );
}

export default function PaginatedProducts({ itemsPerPage = PER_PAGE }) {
  const [currentItems, setCurrentItems] = useState(products);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productsOperations.fetchProducts(products));
  }, [dispatch]);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(products.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(products.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Products currentProducts={currentItems} />
      <ReactPaginate
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
