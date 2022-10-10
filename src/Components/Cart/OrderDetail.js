import React from'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import {  doc, getDoc } from 'firebase/firestore';
import { db } from '../LoginComponents/Firebase';
import "../styleSheets/orderDetail.css";

const OrderDetail = () =>{

    const [orderDetail, setOrderDetail] = useState({});
    const [loading, setLoading] = useState(true);
    const {id} = useParams();   
    const [orderItems, setOrderItems] = useState([])

    useEffect(() => {
        const queryOrder = doc(db , 'orders', id);
        getDoc(queryOrder) 
          .then (res => {
            setOrderDetail({ id: res.id, ...res.data() })
            setOrderItems([ ...res.data().items ])
          })
            setLoading(false)       
    }, [id]);

   
    return (
        <>
        {
            loading ? 
            <div style={{padding: 100 }}>
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Cargando...</span>
                    </div>
                </div>
            </div>
            : 
            <>
                <Row className="order-title" > <h3>Detalle de tu orden </h3> </Row>
                <Row >
                    <h5>¡Recibirás un email con los datos de tu compra!</h5>
                </Row>
                <Container className="order-containter">
                    <Row>  
                        <Col sm={4}><h4>Número de orden:</h4></Col> 
                        <Col sm={3}><p className="order-field">{id}</p> </Col> 
                    </Row>
                    <Row>
                        <Col sm={4}> <p className="order-field">Compra realizada con el email:</p> </Col>
                        <Col sm={3}>{orderDetail.email} </Col>  
                    </Row>
                    <Row>
                        <Col sm={4}> <p className="order-field">Total:</p> </Col>
                        <Col sm={3}>${orderDetail.totalPrice}   </Col>  
                   </Row>
                   <Row>
                    <Col sm={4}> <p className="order-field">Producto/s comprado/s:</p> </Col>
                    <Col>
                   <>
                        {
                            
                            orderItems.map((item) =>
                            <div key={item.id}>
                                <p>Nombre: {item.name}</p>
                                <p>Cantidad: {item.quantity}</p>
                                <p>Precio: {item.price}</p>
                      
                                <hr/>    
                            </div>
                                )
                            }
                    </>
                     </Col>  
                     </Row>
                </Container>
                
            </>
        }
        </>
            
    )
  }
  
  export default OrderDetail;