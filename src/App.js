import {Routes, Route} from 'react-router';
import './App.css';
import Header from './Components/Header';
import ItemDetailContainer from './Components/Products/ItemDetailContainer';
import Category from './Components/Products/Category'
import Home from './Components/Home/Home'
import Cart from './Components/Cart/Cart'
import CartContext from './context/CartContext'


const App= ()=> {
return(
        <>
        <CartContext>
        <Header />
        <Routes>
            <Route path="/" element={ <Home/>}/>
            <Route exact path="/products" element={<Home /> }/>
            <Route exact path="/item/:id" element={<ItemDetailContainer/> }/>
            <Route exact path="/category/:categoryName" element={<Category/>}/>
            <Route path="/cart/" element={<Cart/>}/>
        </Routes>
        </CartContext>
      
        </>

)}


export default App;


