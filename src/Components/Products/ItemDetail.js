import React, { useState, useContext } from 'react'
import {Link ,} from 'react-router-dom'
import { Carousel , Container, Row, Col, Button} from 'react-bootstrap';
import ItemCount from './ItemCount';
import '../../Components/styleSheets/ItemDetail.css'
import swal from "sweetalert";
import { Context } from '../../cartContext/CartContext';



const ItemDetail = ( {item}  ) => {

  const [add, setAdd] = useState(false)
  const { addProduct } = useContext(Context)
  

  const onAdd = (quantity) => {
    addProduct(item, quantity);
    swal({
      title: `Se agregó ${quantity} correctamente al carrito`,
      icon: "success",
      button: "Aceptar",
      timmer: "2000",
    });
    setAdd(!add);
  };


  return (
    <>
  <Container className="item-detail-container container mx-auto my-6 ">
      <Row>
        <Col sm={6} >
          <Carousel style={{maxHeight:'300px', justifyContent: 'center', textAlign:'center'}} className='' >
            <Carousel.Item>
            <img className="d-block w-90 box-detail "
              src={item.image} 
              alt={item.name}
              style={{maxHeight: '420px'}}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-90 box-detail "
                src={item.image2} 
                alt={item.name}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-90 box-detail "
                src={item.image3} 
                alt={item.name}
              />
            </Carousel.Item>
          </Carousel>    
       


        </Col>
        <Col sm={6} className='box'> 
              <h3>{item.name}</h3>
              <h6><b>Ingredientes:</b></h6>
              <p> {item.detail}</p>
              <h6><b>Pertenece a la colección:</b></h6>
              <p> { item.categoryName  }</p>
              <p>{item.description}</p>
          
          <h6>
              <b>Momento del dia recomendado:</b>
          </h6>
          <p className="context">{item.moment}</p> 
          <h6>
              <b>Grado de infusión:</b>
          </h6>
          <p className="item-info">{item.temperature}</p>
          <h6>
              <b>Presentación:</b>
          </h6>
          <p className="item-info">{item.presentation}</p>
       

          <div className="id-Stock">      
          <br/>
            <h6><b>Precio</b>
                <h5 > ${item.price}</h5>
            </h6>
            </div>

          <Container className="cart-buttons-container">
            <Row className="add-button-container">
                {
                 add
                  ? 
                  <Col >
                    <Row>
                    <h6> <b>¡Añadido al carrito!</b></h6>
                    </Row>
                    <Row className="buy-button">
                      <Link to="/cart" >
                        <Button  variant="success" size="lg" > Finalizar compra </Button>
                      </Link>                
                    </Row>
                  </Col>
                  : 
                  <ItemCount item= {item} stock={item.stock} initial="1" onAdd={onAdd} />
                }  
               
            </Row>
            <Row>
            <span > {`Stock: ${item.stock} unidades`}</span>
            </Row>
          </Container>
        </Col>  
      </Row> 
    </Container>
  
   

      
    </>
  );
};


export default ItemDetail