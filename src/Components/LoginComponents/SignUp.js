import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Alert, Card } from "react-bootstrap";
import { useState } from "react";
import { useUserAuth } from "../context/UserAuthContext";
import Login from "./Login";
import '../styleSheets/signUp.css'

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(" ");
  const { signUp } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(" ");
    try {
      await signUp(email, password);
      navigate('/profile')
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <Card className="container box ">
        
            <h2 className="mb-3"> Registrar nueva cuenta </h2>
            {error && <Alert variant="danger">{error} </Alert>}

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder=" Correo Electrónico"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
               
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <div className="d-grid gap-2">
              <Button className= "btn btn-dark-info" type="submit" value="Ingresar" > Crear cuenta</Button>
              </div>
            </Form>
          <hr/>
          <h4>
            
            ¿Ya tienes cuenta?
            <Link to="/login" element={<Login />} className="links">
             
              Ingresar
            </Link>
          </h4>
          
        
      </Card>
      
       
     
    </>
  );
};

export default SignUp;
