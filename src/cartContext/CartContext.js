 import React, { createContext   } from 'react'
import { useState } from 'react'

 
 export const Context = createContext([])
  

 function CartContext({children}){

    const [cart, setCart] = useState([])
    
    const clearCart = ()  => {  setCart([]) }
  
    const isInCart = (id) => cart.find((product) => product.id === id ) ? true : false

    const removeItem = (id)=>{
        setCart(cart.filter((product) =>  product.id !== id))  }
  
    
    const addProduct = (item, quantity)=> {
        
        if(isInCart(item.id)){
        setCart(cart.map (product =>{
            return product.id === item.id ? { ...product, quantity: product.quantity+ quantity } : product}
        ));
        } else {
            setCart([...cart, {...item, quantity: quantity}])
        }}
    
 
  

    const totalPrice = () => {
        return Number(cart.reduce((acumulator, product)  => acumulator + product.quantity * product.price, 0))
    }

    const totalProducts = () => cart.reduce((acum, product ) => acum + product.quantity, 0);
    


    return <Context.Provider value={{
            cart,
            isInCart,
            addProduct, 
            removeItem, 
            clearCart, 
            totalPrice, 
            totalProducts 
            }}>   

             {children}   

            </Context.Provider>
}

export default CartContext;