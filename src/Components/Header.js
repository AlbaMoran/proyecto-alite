import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import Logo from '../assets/images/Logos/AliteTr540x540.png'; 
import CartWidget from './CartWidget';
import './Header.css'



function Header()
{
    return(

      

    <Navbar bg="" variant="lighter" expand="lg" className=" NavColor">
      <Container>
        <img src ={ Logo } className= "navbar-brand"alt="logo" width ="50" />
        <Navbar.Brand href="#home">Alité</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" > Home</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
            <Nav.Link href="#link">Tienda</Nav.Link>
            

          </Nav>

          <Nav className="justify-content-end">
          <Nav.Link href="#link">

            <CartWidget />
          </Nav.Link>
              
            <NavDropdown title="Ingresar"  id="basic-nav-dropdown" >
              <NavDropdown.Item href="#action/3.1">Usuario registrado</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Crear cuenta
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>  
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;


