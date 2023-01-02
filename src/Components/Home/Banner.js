import React from 'react'
import '../styleSheets/Home.css'
import {Col, Container} from 'react-bootstrap'

const Banner = () => {
  return (
   <>
  <Container fluid className="col-xs-12 col-md-6 col-lg-3" >
    <Col>
      <img className='banner' src="https://firebasestorage.googleapis.com/v0/b/alite-tea-store.appspot.com/o/Logos%2FAliteLogo.png?alt=media&token=5b1c32d1-9b7f-47a1-9279-99419fe94279" alt="banner"/>
    
    </Col>
    <Col>
        <h1 className='brand'> Alité</h1> <h3>~. Tea Store .~</h3>
    </Col>
  </Container>
     
   </>
   
  )
}

export default Banner