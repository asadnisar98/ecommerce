import React, { useContext } from 'react'

import StoreContext from '~/context/StoreContext'
import LineItem from './LineItem'
import 'bootstrap/dist/css/bootstrap.css';
import {
	Container,
  Row,
  Col
  } from "reactstrap";

const Cart = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  const lineItems = checkout.lineItems.map(item => (
    <LineItem key={item.id.toString()} item={item} />
  ))

  return (
    <div>
      <section className="pb-5 pt-5 cart-bg">
        <Container>
        <Row>
          <Col lg="12">
            <h1 className="cart-title">Cart</h1>
            {lineItems}
            <div className="text-center">
            <h2>Total</h2>
            <p>$ {checkout.totalPrice}</p>
            <br />
            <button className="remove-cart"
              onClick={handleCheckout}
              disabled={checkout.lineItems.length === 0}
            >
              Check out
            </button>
            </div>
          </Col>
        </Row>
      </Container>
      </section>
    </div>
  )
}

export default Cart
