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
    <Card style={{ with: "18rem" }} className="box mt-5">
        <Card.Body>
    <div className="p-4  mt-3 text-center"> Hola usuario <br/>
     { user.displayName ? user && user.displayName :user && user.email }
      </div>
    <div className="d-grid pag-2"> 
    <Button variant='primary' onClick={handleLogOut}> Cerrar sesión </Button>
    </div>
        </Card.Body>
    </Card>

        
        
    </>
  )
}

export default HomeProfile