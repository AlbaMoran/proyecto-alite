import React from 'react';

function ItemListContainer({greeting}){

    return (
            <>
            <h1 style={styles.h1}>{greeting}</h1>
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
