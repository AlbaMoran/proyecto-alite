import {useState} from "react"
import { Link, useNavigate } from "react-router-dom";
import SignUp from "./SignUp";
import { Card, Button, Form, Alert} from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";
import '../styleSheets/login.css'


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(" ");
  const { logIn, googleSingIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(" ");
    try {
      await logIn(email, password);
      navigate('/profile')
    } catch (error) {
      setError(error.message);
    }
  };

  const  handleGoogleSignIn = async (e) =>{
    e.preventDefault()
    try {
      await googleSingIn();
      navigate('/profile')
      
    } catch (error) {
      setError(error.message)
    }

  }

  return (
    <>

                            


      <Card  className="box ">
        <Card.Body>
          <div className="p-4 ">
            <h2 className="mb-3"> Login de cuenta  </h2>
           <hr/>
            {error && <Alert variant="danger">{error}</Alert>}
           

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder=" Correo Electrónico" 
                onChange={(e)=> setEmail(e.target.value)}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" 
                onChange={(e)=> setPassword(e.target.value)}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Button className= "btn btn-dark-info" type="submit" value="Ingresar" > Ingresar</Button>
              </Form.Group>
              
              <Form.Group className="mb-3 " controlId="formBasicPassword">
                <GoogleButton className="g-btn " onClick={handleGoogleSignIn} />
              </Form.Group>
              <hr/>
              
               
          
            </Form>
          </div>
         
          <div className="p-2 text-center">
                      ¿Olvidaste tu contraseña? <Link to="/reestablecerPassword">Restablecer.</Link>
                    </div>
          <h4>
            {" "}
            ¿No tienes cuenta?{" "}
            <Link to="/registrarse" element={<SignUp />} className="links">
              {" "}
              Registrarse
            </Link>
          </h4>
          
        </Card.Body>
      </Card>
     
        
     
    </>
  );
};

export default Login;
