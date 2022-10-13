import React from'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import {  doc, getDoc } from 'firebase/firestore';
import { db } from '../LoginComponents/Firebase';
import "../styleSheets/orderDetail.css";
import Logo from './../../assets/images/Logos/AliteTr540x540.png' 

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
              <Container className="order-container box">
                <Container className="container ">
                <div className="order-title" >
                     <h4> Detalle de tu orden </h4> 
                </div>
                <div className= "order-subtitle">
                    <div> <img src ={ 'https://firebasestorage.googleapis.com/v0/b/alite-tea-store.appspot.com/o/Logos%2FAliteTr540x540.png?alt=media&token=885d97c2-b420-4087-b124-de26bfb847bf' } alt="logo"  /> </div>                
                    <h5><b>¡Recibirás un email con los datos de tu compra!</b></h5>
                </div>
                </Container>

                    <Row >  
                        <Col sm={4}><h4 className="order-field">Número de orden:</h4></Col> 
                        <Col sm={3}><p className="order-field">{id}</p> </Col> 
                    </Row>
                    <Row>
                        <Col sm={4}> <p className="order-field">Compra realizada con el email:</p> </Col>
                        <Col sm={3}> <p className='order-field'> {orderDetail.email}</p> </Col>  
                        
                    </Row>
                    <Row>
                        <Col sm={4}> <p className="order-field">Teléfono de contacto:</p> </Col>
                         <Col sm={3}><p className="order-field">  {orderDetail.phone} </p></Col>
                    </Row>
                    <Row>
                        <Col sm={4}> <p className="order-field">Total:</p> </Col>
                        <Col sm={3}> <p className="order-field"> <b>${orderDetail.totalPrice} </b> </p> </Col>  
                   </Row>
                   <hr/>
                   <Row>
                    <Col sm={4}> <p className="order-field">Producto/s comprado/s:</p> </Col>
                    <Col>
                   <>
                        {
                            
                            orderItems.map((item) =>
                            <div key={item.id}>
                                <p>Nombre: <b> {item.name}</b></p>
                                <p>Cantidad: {item.quantity}</p>
                                <p>Precio: $ {item.price}</p>
                      
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