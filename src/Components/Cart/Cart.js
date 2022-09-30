import React, { useContext } from 'react'
import { Context } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import ItemCart from './ItemCart'
import {Button, Container, Row, Col} from 'react-bootstrap'


const Cart = () => {
  const { cart, totalPrice} = useContext(Context)

if (cart.length === 0){
  return (
    <Container className="cart-container p-5">
                        <Row>
                            <Col>
                                <h3>No hay productos aún.</h3>
                                <Link to="/">
                                    <Button variant="dark" size="md"> ir a Tienda</Button>
                                </Link>
                            </Col>
                        </Row>
    </Container>
    )
}

  return (
<>
    <Container className="cart-container p-5">
      <Row>
      <Col>
      {
        cart.map((product) => <ItemCart key={product.id} product={product}/> )
      }
      </Col>
      </Row>
    
    </Container>
        <Row>
            <Col>
                <h2> Total:${ totalPrice() }</h2>
            </Col>
        </Row>
  
  
  </>
  )
}

export default Cart