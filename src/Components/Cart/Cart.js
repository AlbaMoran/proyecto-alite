import React, { useContext } from 'react'
import { Context } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import {Button, Container, Row, Col} from 'react-bootstrap'
import './Cart.css' 


const Cart = () => {
  const { cart, totalPrice, clearCart, removeItem} = useContext(Context)

  return (
<>
{
cart.length === 0 
?

<Container className="cart-container p-5">
                        <Row>
                            <Col>
                                <h3>No hay productos aún.</h3>
                                <Link to="/">
                                    <Button variant="secondary" size="md"> Ir a Tienda</Button>
                                </Link>
                            </Col>
                        </Row>
    </Container>

    :
  <>  
    <Container className="cart-container p-5">
      <Row>
      <Col>
      {
        cart.map((product) => (
        <div className="itemCart" key= {product.id}>
          <img src={product.image} alt={product.name} />
         
            <p>Nombre : {product.name}</p>
            <p>Cantidad : {product.quantity}</p>
            <p>Precio: {product.price}</p>
            <p>Subtotal:$ {product.quantity * product.price}</p>
            <Button variant="secondary" onClick={ () => removeItem(product.id)}> 
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
              </svg>
            </Button>
            
            <hr/>
                 
        </div>
        )
        )
      }
      </Col>
      </Row>
    
    </Container>
        <Row>
            <Col>
                <h2> Total:${ totalPrice() }</h2>
            </Col>
            <Col>
                <Button onClick={()=> clearCart()}> Vaciar Carrito</Button>  
            </Col>
        </Row>
        </>
  
}
</>
  )
}

export default Cart