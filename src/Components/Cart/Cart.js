import React, { useContext } from 'react'
import { Context } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { Button, Container, Row, Col, Table } from 'react-bootstrap'
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
      <Col sm={8}>
                        <h3> Tu carrito -  
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
                             <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                       </svg>
                       </h3>
      </Col>
      <Col sm={4}>
      </Col>
      </Row>
      <Row>
      <Col sm={8}>
      <Table responsive="sm">
                            <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Nombre</th>
                                <th>Cantidad</th>
                                <th>Precio unitario</th>
                                <th> Subtotal </th>
                                <th> Eliminar </th>
                            </tr>
                            </thead>
                            <tbody >
                            {
                                cart.map((product) => (
                            <tr  key={product.id}>
                                <td><img src={product.image} alt={product.name} style={{height:'80px'}}/> </td>
                                <td> {product.name}</td>
                                <td>{product.quantity}</td>
                                <td>${product.price}</td>
                                <td>${product.price * product.quantity}</td>
                                <td>
                                    <Button variant="secondary" onClick={() => removeItem(product.id)}> 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                    </svg>
                                    </Button>
                                </td>
                            </tr>
                            ))
                          }
                      <thead>
                            <tr>
                             
                                <th> <h2> Total:${ totalPrice() }</h2> </th>
                            </tr>
                            </thead>
                       
                        <br />

                        <tr>
                        <div>
                        <Button onClick={()=> clearCart()}> Vaciar Carrito</Button>
                           
                        </div>    
                        </tr>                
                                                 
                    </tbody>
                </Table>
      </Col>
      </Row>
    
    </Container>
        
        </>
  
}
</>
  )
}

export default Cart