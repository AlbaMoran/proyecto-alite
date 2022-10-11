import React, { useContext, useState } from 'react'
import { Context } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { Button, Container, Row, Col, Table } from 'react-bootstrap'
import '../styleSheets/cart.css'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db, updateStock } from '../LoginComponents/Firebase'
import swal from "sweetalert";
import CartWidget from '../CartWidget'


const Cart = ({ nameId }) => {

    const { cart, totalPrice, clearCart, removeItem } = useContext(Context)

    const [buyer, setBuyer] = useState({ name: '', email: '', phone: '' })

    const [orderStatus, setOrderStatus] = useState(false)
    const [orderId, setOrderId] = useState("");


    const order = {
        ...buyer,
        items: cart.map(product => ({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: product.quantity
        })),
        totalPrice: totalPrice(),
    }

    const clickPurchase = async (order) => {
        const newOrder = await addDoc(collection(db, "orders"), { ...order, date: serverTimestamp() })
        return newOrder

    }

    const handlerSubmit = async (e) => {

        e.preventDefault();

        if (order.name !== "" && order.phone !== "" && order.email !== "") {
            clickPurchase(order)
            .then((res) => {
                    setOrderId(res.id)
                    
                })
                .then(() => cart.forEach((item) => updateStock(item.id, item.quantity)))
                .then(() => clearCart())
                .catch(
                    (err) => new swal(`Hubo un Error!`, "Prueba de nuevamente", "error")
                )
        } else {
            new swal({
                title: "Error en la carga de datos",
                text: "Completa nuevamente el formulario y vuelve a enviar el pedido",
                icon: "error",
                button: "Ok",
            })
        }
    }
    const handlerChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value,

        })
    }
    const startPurchase = () => {
        setOrderStatus(!orderStatus)
    }
console.log(orderId)
    return (
        <>
            {
                cart.length === 0
                    ?
                    
                        (orderId) ? (
                            <>
                            <Container className="order-successs-container">
                              <h4> La orden se registró con el id {orderId} y se envió correctamente</h4>
                              
                              <Link to={`/order/${orderId}`}>
                                    <Button variant="dark" size="md" className="m-2">
                                      {" "}
                                      Ver detalle
                                    </Button>
                              </Link>
                              <Link to="/">
                                    <Button variant="dark" size="md"  className="m-2">
                                      {" "}
                                      Seguir comprando
                                    </Button>
                              </Link>
                          </Container>
                          </>

                            )
                            :
                            (

                                <Container className="cart-container box ">
                                    <Row>
                                        <Col>
                                            <h3> No hay productos aún.</h3>
                                            <Link to="/">
                                                <Button variant="secondary" size="md"> Ir a Tienda</Button>
                                            </Link>
                                        </Col>
                                    </Row>
                                </Container>

                            )
                    


                    :
                    <>
                        <Container className="cart-container ">
                            <Row>
                                <Col sm={8}>
                                    <h2> 
                                        <CartWidget/>
                                       
                                    </h2>
                                         <h4> Resumen de tus productos </h4>
                                </Col>
                                <Col >
                                </Col>
                            </Row>
                            <Row >
                                <Col lg={12}>
                                    
                                    
                                        <Table className="table">
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
                                                        <tr key={product.id}>
                                                            <td><img src={product.image} alt={product.name} style={{ height: '80px' }} /> </td>
                                                            <td> {product.name}</td>
                                                            <td>{product.quantity}</td>
                                                            <td>${product.price}</td>
                                                            <td>${product.price * product.quantity}</td>
                                                            <td>
                                                                <Button variant="light" onClick={() => removeItem(product.id)}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16" style={{color:'#D81921'}}>
                                                                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                                                    </svg>
                                                                </Button>
                                                            </td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                                <thead>
                                                    <tr>
                                                        <th> <h2> Total:${totalPrice()}</h2> </th>
                                                    </tr>
                                                </thead>

                                        </Table>
                                              
                                        <Link to ="/">
                                                <Button className= "btn btn-dark-info me-2"  onClick={startPurchase}> Seguir comprando </Button>
                                        </Link>
                                           
                                                <Button className= "btn btn-secondary"  size="md" onClick={() => clearCart()} > Vaciar Carrito</Button>
                                                <br/>   
                                                <br/>
                                   
                                    {
                                        orderStatus === false
                                        ?
                                        <>

                                                <Button variant="success" onClick={startPurchase}> Iniciar Compra</Button>
                                        </>
                                            :

                                            <Col md={8}>
                                                <p> Completa tus datos para finalizar la compra</p>
                                                <form

                                                    onSubmit={handlerSubmit}
                                                    onChange={handlerChange}
                                                    className="d-flex flex-column align-center container mt-2 mb-3"
                                                >
                                                    <input
                                                        className="form-control mb-2"
                                                        type="text"
                                                        placeholder="Nombre"
                                                        name="name"
                                                        defaultValue={order.name}
                                                    />
                                                    <input
                                                        className="form-control mb-2"
                                                        type="number"
                                                        placeholder="Teléfono"
                                                        name="phone"
                                                        defaultValue={order.phone}
                                                    />
                                                    <input
                                                        className="form-control mb-2"
                                                        type="email"
                                                        placeholder="Email"
                                                        name="email"
                                                        defaultValue={order.email}
                                                    />

                                                    <button className="btn btn-success d-block mt-2" >
                                                        Finalizar compra
                                                    </button>

                                                </form>



                                            </Col>
                                    }
                                </Col>
                            </Row>


                        </Container>

                    </>

            }
        </>
    )
}

export default Cart