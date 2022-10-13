import { getDocs, collection   } from 'firebase/firestore';
import { db } from '../LoginComponents/Firebase'
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ItemListContainer from './ItemListContainer'
import '../styleSheets/category.css';


function Category() {

    const { categoryName } = useParams();

    const [categories, setCategories] = useState([]);
  

    useEffect(() => {         
      
       const queryCollection =  collection( db , 'categories')
       getDocs(queryCollection)
            
       .then(res => setCategories(res.docs.map(cat => ({ ...cat.data() }))))
       
      }, [])
  
      console.log(categories)
  
  

    return (
        <div className="category">
                       
   
           <ItemListContainer  categoryName={categoryName} />
            
        </div>
    )
}

export default Category;