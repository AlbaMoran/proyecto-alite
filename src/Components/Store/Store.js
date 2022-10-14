import React from 'react';
import ItemListContainer from '../Products/ItemListContainer';
import '../styleSheets/Store.css'



function Store  ( ) {


    return (
       
       <> 
             
        <h2 className="store-title">Tienda de Productos</h2>  

        <div className="container store">
                                             
                    <ItemListContainer/>
             
        </div>
        
       </>
    )
}

export default Store; 