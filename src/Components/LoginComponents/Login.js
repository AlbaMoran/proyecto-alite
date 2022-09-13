import {useState} from "react"
import { Link, useNavigate } from "react-router-dom";
import SignUp from "./SignUp";
import { Card, Button, Form, Alert } from "react-bootstrap";
import GoogleButton from "react-google-button";
import GoogleLogo from '../../assets/images/Logos/Google.png'
import { useUserAuth } from "../context/UserAuthContext";


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
      navigate('/home')
    } catch (error) {
      setError(error.message);
    }
  };

  const  handleGoogleSignIn = async (e) =>{
    e.preventDefault()
    try {
      await googleSingIn();
      navigate('/home')
      
    } catch (error) {
      setError(error.message)
    }

  }

  return (
    <>
      <Card style={{ with: "18rem" }} className="container mt-5">
        <Card.Body>
          <div className="p-4 box">
            <h2 className="mb-3"> Login de cuenta </h2>
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
                <Button type="submit" value="Ingresar" variant="info light"> Ingresar</Button>
              </Form.Group>
              
              <Form.Group className="mb-3 " controlId="formBasicPassword">
                <GoogleButton className="g-btn" type="dark" onClick={handleGoogleSignIn} />
                        
              </Form.Group>
               
          
            </Form>
          </div>
        </Card.Body>
      </Card>
      <Card style={{ with: "18rem" }} className="container mt-5">
        <Card.Body>
          <h3>
            {" "}
            ¿No tienes cuenta?{" "}
            <Link to="/registrarse" element={<SignUp />} className="links">
              {" "}
              Registrarse
            </Link>
          </h3>
        </Card.Body>
      </Card>
    </>
  );
};

export default Login;
