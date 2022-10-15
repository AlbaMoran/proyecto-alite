
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import CartWidget from '../CartWidget/CartWidget';
import '../styleSheets/Header.css'
import { Link, NavLink } from 'react-router-dom'




function Header(){

    return(
   

    <Navbar  variant="lighter" expand="lg" className="NavColor" fixed='top'>
      <Container>
      <Link to="/" className="links "> 
        <img src ={ 'https://firebasestorage.googleapis.com/v0/b/alite-tea-store.appspot.com/o/Logos%2FAliteTr540x540.png?alt=media&token=885d97c2-b420-4087-b124-de26bfb847bf' } className= "navbar-brand" alt="logo" width ="50" />
      </Link>
        <Navbar.Brand  className="links "> Alité - tienda de Té </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
          <Navbar.Collapse id="basic-navbar-nav">
            
            <Nav className="me-auto ">
                  <Navbar.Text className=""> <NavLink to="/" className="links "> Home</NavLink>  </Navbar.Text>
                  <Navbar.Text > <Link to="/blog" className="links">Blog</Link>      </Navbar.Text>
                  <Navbar.Text > <Link to="/store" className="links">Tienda</Link></Navbar.Text>
                              
                    <NavDropdown title= "Categorias" id="basic-nav-dropdown" className="links">
                        <NavDropdown.Item > <Link to="/category/Variedades" className="userOption"> Variedades </Link> </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item > <Link to="/category/Colecciones" className="userOption"> Colecciones </Link> </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item >  <Link to="/category/Boxes" className="userOption"> Boxes </Link> </NavDropdown.Item>
                    </NavDropdown>
            </Nav>

            <Nav className="justify-content-end">
                  <Navbar.Text> <Link to="/cart" className='me-3'> <CartWidget/> </Link>  </Navbar.Text>
                  <Navbar.Text> <Link to="/login"  className="userOption"> Ingresar </Link> </Navbar.Text>
            </Nav>  
          </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;


