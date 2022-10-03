import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Alert, Card } from "react-bootstrap";
import { useState } from "react";
import { useUserAuth } from "../context/UserAuthContext";
import Login from "./Login";

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
      <Card style={{ with: "18rem" }} className="container mt-5">
        <Card.Body>
          <div className="p-4 box">
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
                <Button type="submit"  variant="info"> Crear cuenta </Button>
              </div>
            </Form>
          </div>
        </Card.Body>
      </Card>
      <Card style={{ with: "18rem" }} className="container mt-5">
        <Card.Body>
          <h2>
            {" "}
            ¿Ya tienes cuenta?{" "}
            <Link to="/login" element={<Login />} className="links">
              {" "}
              Ingresar
            </Link>
          </h2>
        </Card.Body>
      </Card>
    </>
  );
};

export default SignUp;
