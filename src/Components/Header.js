
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import Logo from '../assets/images/Logos/AliteTr540x540.png'; 
import CartWidget from './CartWidget';
import './Header.css' 
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
                     <Link to="/" className="links" > Home</Link>
                  </Navbar.Text>
                  <Navbar.Text  >
                      <Link to="#link" className="links">Blog</Link>
                  </Navbar.Text>
                  <Navbar.Text >
                     <Link to="/tienda" className="links" >Tienda</Link>
                  </Navbar.Text>
                  <Navbar.Text  >
                      <Link to="/itemList" className="links"> Productos</Link>
                 </Navbar.Text>
          </Nav>

          <Nav className="justify-content-end">
          <Nav.Link href="#link">
            <CartWidget />
          </Nav.Link>
            <Navbar.Text>
              <Link to="/login" className="links"> <b>Ingresar</b>  </Link>
           </Navbar.Text>
            {/* <NavDropdown title="Ingresar"  id="basic-nav-dropdown" >
              <NavDropdown.Item ><Link to="#" style={styles.userOption}> Usuario registrado</Link></NavDropdown.Item>
         
              <NavDropdown.Divider />
             
              <NavDropdown.Item href="#action/3.4">
                  <Link to="#" style={styles.userOption}> Crear Cuenta</Link> 
              </NavDropdown.Item>
            </NavDropdown> */}
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


