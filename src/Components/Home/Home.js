import React from 'react';
import ItemListContainer from '../Products/ItemListContainer';
import '../styleSheets/Home.css'
import Banner from './Banner'


function Home  ( ) {


    return (
       
       <> 
        <div className='banner' style={{textAlign:'center'}}>
            <Banner/>
        </div> 
        

        <div className="container home">
        <h2 className="hm-title">Tienda de Productos</h2>  
        
                                     
                    <ItemListContainer/>
             
        </div>
        
       </>
    )
}

export default Home; 