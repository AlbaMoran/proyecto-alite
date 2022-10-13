import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Alert, Container } from 'react-bootstrap';
import { useUserAuth } from '../../Components/context/UserAuthContext'

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const { passwordReset } = useUserAuth();
    const navigate = useNavigate();
  
        const handlePasswordReset = async (e) => {
        e.preventDefault();
        try {
            await passwordReset(email);
            navigate("/login");
        } catch (err) {
            setError(err.message);
        }
    };
    return (
        <>
            <Container className="p-4 box">
                <h2 className="mb-3"> Restablecer contraseña.</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handlePasswordReset}>
                    <FormGroup className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Ingresá tu dirección de email." 
                        onChange={(e) => setEmail(e.target.value)}
                        /> 
                    </FormGroup>
                    <Button className="btn" variant="primary" type="submit">Restablecer</Button>   
                </Form>
            <hr/>    
            <Link to="/login" className="text-center">Volver a la página de inicio.</Link>
            </Container>

        </>
    )
}

export default ForgotPassword;