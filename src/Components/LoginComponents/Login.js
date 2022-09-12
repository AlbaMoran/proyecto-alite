import { Link } from "react-router-dom";
import SignUp from "./SignUp";
import { Card, Button, Form } from "react-bootstrap";
import GoogleButton from "react-google-button";

const Login = () => {
  return (
    <>
      <Card style={{ with: "18rem" }} className="container mt-5">
        <Card.Body>
          <div className="p-4 box">
            <h2 className="mb-3"> Login de cuenta </h2>

            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder=" Correo Electrónico" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="email" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                
                <Button type="submit" value="Ingresar" variant="info"> Ingresar</Button>
              </Form.Group>
            
                <Button type="submit" value={GoogleButton} variant="light" > Ingresar con google</Button>
                    
                    
                
          
            </Form>
          </div>
        </Card.Body>
      </Card>
      <Card style={{ with: "18rem" }} className="container mt-5">
        <Card.Body>
          <h2>
            {" "}
            ¿No tienes cuenta?{" "}
            <Link to="/registrarse" element={<SignUp />} className="links">
              {" "}
              Regsitrarse
            </Link>
          </h2>
        </Card.Body>
      </Card>
    </>
  );
};

export default Login;
