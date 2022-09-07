import React, { useState} from 'react'
import { Card, Button, InputGroup, ListGroup} from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


export const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(0)

    const addItem = () => {
      
        if (stock > count) {
        
        setCount(count + 1)}

    }

    const subtractItem = () => {
        
        if (stock >= count && count > 0) {
        
        setCount(count - 1)}

    }

    const addCart = () => {

        if (count > 0) { onAdd({text:count})}};
        
 return (
        <>
       
        <Card className='container' style={{width: '18rem'}}>Detalle de Producto
        <Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>
                            <ButtonGroup aria-label="Basic example">
                                <Button variant="secondary" onClick={subtractItem}>-</Button>
                                <Button variant="secondary">{count} </Button>
                                <Button variant="secondary" onClick={addItem}>+</Button>
                            </ButtonGroup>
                    </ListGroup.Item>
                        <ListGroup.Item>
                                <Button variant="outline-success outline-warning" onClick={addCart}>Agregar {count} a Carrito</Button>
                        </ListGroup.Item>
                </ListGroup>
        
        </Card.Body>
        </Card>
        </>
  )
}

export default ItemCount
