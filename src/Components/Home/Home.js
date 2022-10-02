import React from 'react';
import ItemListContainer from '../Products/ItemListContainer';
import '../styleSheets/Home.css'
import categories from '../../assets/database/categories'


function Home  ( ) {

    console.log(categories)

    return (
        
       <> 
        <div className="container hm-title">
        <h2 className="hm-title">Tienda de Productos</h2>  
            <div>
            {
                categories.map( (cat) => (
                                     
                    <ItemListContainer key={cat.id} categoryName={cat.categoryName}/>
                ))
                
            }

            </div>
           
        </div>
        
       </>
    )
}

export default Home; 