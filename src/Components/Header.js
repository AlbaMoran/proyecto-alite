
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import Logo from '../assets/images/Logos/AliteTr540x540.png'; 
import CartWidget from './CartWidget';
import './styleSheets/Header.css'
import { Link, NavLink } from 'react-router-dom'



function Header()
{
    return(

      

    <Navbar bg="" variant="lighter" expand="lg" className=" NavColor">
      <Container>
        <img src ={ Logo } className= "navbar-brand"alt="logo" width ="50" />
        <Navbar.Brand href="/">Alité</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto links">
                  <Navbar.Text  >
                     <NavLink to="/" className="links"> Home</NavLink>
                  </Navbar.Text>
                  <Navbar.Text  >
                      <Link to="/blog" className="links">Blog</Link>
                  </Navbar.Text>
                  <Navbar.Text >
                     <Link to="/products" className="links">Tienda</Link>
                  </Navbar.Text>
                              
                    <NavDropdown title="Categorias"  id="basic-nav-dropdown" className="links" >
                        <NavDropdown.Item ><Link to="/category/Variedades" className="userOption"> Variedades</Link></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item >                      
                          <Link to="/category/Colecciones" className="userOption"> Colecciones</Link> 
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item >                      
                          <Link to="/category/Boxes" className="userOption"> Boxes</Link> 
                        </NavDropdown.Item>
                    </NavDropdown>
                
                
          </Nav>

          <Nav className="justify-content-end">
          <Navbar.Text> <Link to="/cart"> <CartWidget/> </Link>  </Navbar.Text  >
              
            <NavDropdown title="Ingresar"  id="basic-nav-dropdown" >
              <NavDropdown.Item ><Link to="#" className="userOption"> Usuario registrado</Link></NavDropdown.Item>
         
              <NavDropdown.Divider />
             
              <NavDropdown.Item href="#action/3.4">
                  <Link to="#" className="userOption"> Crear Cuenta</Link> 
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>  
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}




export default Header;


