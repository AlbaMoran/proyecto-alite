import React from 'react';
import ItemCount from './ItemCount'
import swal from 'sweetalert';


function ItemListContainer({greeting}){

    const onAdd = () => {

        swal({
        title: `Se agregó correctamente al carrito`,
        icon: 'success',
        button: "Aceptar",
        timmer: "2000"
      
    })}



   

    return (
            <>
            <h1 style={styles.h1}>{greeting}</h1>
            <ItemCount stock ="10" initial="0" onAdd={onAdd} />

            </>
    )
}
    

const styles={
    h1: {
        color: "#8bd0de",
        padding: 30,
        alignItems: "center",
        textShadow: "0 0 0 16"

    }
    

}




export default ItemListContainer;
