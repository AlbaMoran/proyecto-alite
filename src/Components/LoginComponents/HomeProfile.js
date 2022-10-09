import React from 'react'
import {Button, Card} from 'react-bootstrap'
import { useUserAuth } from "../context/UserAuthContext";

const HomeProfile = () => {
    const { user, logOut } =  useUserAuth()
    console.log(user)

    
    const handleLogOut = async ()=>{
        try {
           await logOut() 
        } catch (error) {
            console.log(error)
            
        }
    }

  return (
    <>
    <Card style={{ with: "18rem" }} className="container mt-5">
        <Card.Body>
    <div className="p-4 box mt-3 text-center"> Hola usuario <br/>
     {user && user.displayName}  </div>
    <div className="d-grid pag-2"> 
    <Button variant='primary' onClick={handleLogOut}> Cerrar sesión </Button>
    </div>
        </Card.Body>
    </Card>

        
        
    </>
  )
}

export default HomeProfile