import React from 'react';
import ItemListContainer from '../Products/ItemListContainer';
import '../styleSheets/Home.css'


function Home  ( ) {


    return (
       
       <> 
        <div className="container home">
        <h2 className="hm-title">Tienda de Productos</h2>  
        
                                     
                    <ItemListContainer/>
             
        </div>
        
       </>
    )
}

export default Home; 