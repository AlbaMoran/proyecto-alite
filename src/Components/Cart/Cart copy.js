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
    <Container className="cart-container p-3">
                <Row>
                    <Col sm={8}>
                        <h3>Tu selección</h3>
                    </Col>
                    <Col sm={4}>
                    </Col>
                </Row>
                <Row>
                    <Col sm={8}>
                        <Table responsive="sm">
                            <thead>
                            <tr>
                                <th>Paseo seleccionado</th>
                                <th>Cantidad</th>
                                <th>Precio</th>
                                <th>Subtotal</th>
                                <th> Eliminar </th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                cart.map((product) => (
                            <tr  key={product.id}>
                              <img src={product.image} alt={product.name} />
                                <td> {product.name}</td>
                                <td>{product.quantity}</td>
                                <td>${product.price}</td>
                                <td>${product.price * item.quantity}</td>
                                <td>
                                    <Button variant="danger" onClick={() => removeItem(item.id)}> 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                    </svg>
                                    </Button>
                                </td>
                            </tr>
                            ))
                        }
                            </tbody>
                        </Table>
                    </Col>
                    <Col sm={4  }>
                        <Button className="cart-button" variant="dark" onClick={() => clearItems()}>Vaciar carrito</Button>
                        <Row className="p-3 cart-total">
                            <h5>Total a pagar:  $ {totalCartPrice()} </h5>
                        </Row>
                        <Button className="cart-button" variant="dark">Crear orden de compra</Button>
                    </Col>    
                </Row>
                </Container>
</>
  )
}

export default Cart