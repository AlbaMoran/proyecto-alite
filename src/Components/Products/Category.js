import React from 'react';
import { useParams } from 'react-router-dom';
import ItemListContainer from './ItemListContainer'

function Category () {
   
    const {categoryName} = useParams();

    return (
       <> 
        <ItemListContainer  categoryName={categoryName} />
       </>
    )
}

export default Category;