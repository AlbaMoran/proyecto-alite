
import { Container, Nav, Navbar } from 'react-bootstrap'
import Logo from '../assets/images/Logos/AliteTr540x540.png'; 
import CartWidget from './CartWidget';
import './Styles/Header.css' 
import { Link } from 'react-router-dom'




function Header(){



    return(

      

    <Navbar bg="" variant="lighter" expand="lg" className=" NavColor">
      <Container>
        <img src ={ Logo } className= "navbar-brand"alt="logo" width ="50" />
        <Navbar.Brand href="/">Alité</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                  <Navbar.Text  >
                     <Link to="/home" className="hdLinks" > Home</Link>
                  </Navbar.Text>
                  <Navbar.Text  >
                      <Link to="/blog" className="hdLinks">Blog</Link>
                  </Navbar.Text>
                  <Navbar.Text >
                     <Link to="/tienda" className="hdLinks" >Tienda</Link>
                  </Navbar.Text>
                  <Navbar.Text  >
                      <Link to="/itemList" className="hdLinks"> Productos</Link>
                 </Navbar.Text>
          </Nav>

          <Nav className="justify-content-end">
          <Nav.Link href="#link">
            <CartWidget />
          </Nav.Link>
            <Navbar.Text>
              <Link to="/login" className="hdLinks"> <b>Ingresar</b>  </Link>
           </Navbar.Text>
           </Nav>  
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


// const styles={
//   links: {
//       textDecoration: "none",
//       padding: "0 5px"},
   
//   userOption: {
//         padding: "0 5px",
//         color: "black",
//         textDecoration: "none"
//       }}
       


export default Header;


