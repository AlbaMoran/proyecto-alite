import React from 'react';
import ItemListContainer from '../Products/ItemListContainer';
import '../styleSheets/Home.css'



function Home  ( ) {

    return (
        
       <> 
        <div className="container hm-title">
        <h2 className="hm-title">Tienda de Productos</h2>  
            <div>
               
                    <ItemListContainer />
   
            </div>
           
        </div>
        
       </>
    )
}

export default Home; 