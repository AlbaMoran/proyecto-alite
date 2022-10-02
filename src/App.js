import {Routes, Route} from 'react-router';
import './App.css';
import Header from './Components/Header';
import ItemListContainer from './Components/Products/ItemListContainer';
import ItemList from './Components/Products/ItemList';
import Login from './Components/LoginComponents/Login';
import SignUp from './Components/LoginComponents/SignUp';
import { UserAuthContextProvider } from './Components/context/UserAuthContext';
import {ProtectedRoute} from './Components/LoginComponents/ProtectedRoute'
import HomeLogin from './Components/LoginComponents/Home'
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
    <UserAuthContextProvider>
        <Routes>
            <Route path="/" element={<ProtectedRoute> <Home/> </ProtectedRoute>}/>
            <Route exact path="/products" element={<Home /> }/>
            <Route exact path="/item/:id" element={<ItemDetailContainer/> }/>
            <Route exact path="/category/:categoryName" element={<Category/>}/>
            <Route path="/cart" element={<Cart/>}/>
     
           <Route path="/login" element={<Login/>}/>
            <Route path="/registrarse" element={<SignUp/>}/>
        </Routes>   
    </UserAuthContextProvider>   
    </CartContext>
</>


)}


export default App;


