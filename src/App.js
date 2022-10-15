import {Routes, Route} from 'react-router';
import './App.css';
import Header from './Components/Home/Header';
import Login from './Components/LoginComponents/Login';
import SignUp from './Components/LoginComponents/SignUp';
import { UserAuthContextProvider } from './Components/context/UserAuthContext';
import {ProtectedRoute} from './Components/LoginComponents/ProtectedRoute'
import HomeProfile from './Components/LoginComponents/HomeProfile'
import ItemDetailContainer from './Components/Products/ItemDetailContainer';
import Home from './Components/Home/Home'
import Cart from './Components/Cart/Cart'
import OrderDetail from './Components/Cart/OrderDetail'
import CartContext from './cartContext/CartContext'
import Footer from './Components/Footer/Footer'
import TermsAndConditions from './Components/TermsAndConditions/TermsAndConditions'
import Blog from './Components/Blog/Blog'
import ForgotPassword from './Components/LoginComponents/ForgotPassword'
//import Category from './Components/Products/Category';
import Store from './Components/Store/Store'
import NotFound from './Components/NotFound/NotFound'
import ItemListContainer from './Components/Products/ItemListContainer'

const App= ()=> {
return(

<>

<CartContext>
    <Header />
    <UserAuthContextProvider>
        <Routes>
            <Route path="/" element={<Home /> }/>
            <Route exact path="/store" element={<Store /> }/>
            <Route exact path="/blog" element={<Blog /> }/>
            <Route exact path="/cart" element={<Cart/>}/>
            <Route exact path="/order/:id" element={<OrderDetail/>}/>
            <Route exact path="/item/:id" element={<ItemDetailContainer/> }/>
            <Route exact path="/category/:categoryName" element={<ItemListContainer/>}/>
     
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/reestablecerpassword" element={<ForgotPassword/>}/>
            <Route exact path="/profile" element={<ProtectedRoute> <HomeProfile/> </ProtectedRoute>}/>
            <Route exact path="/registrarse" element={<SignUp/>}/>
            <Route exact path="/terminos_y_condiciones" element={<TermsAndConditions/>}/>
            <Route path="*" element={<NotFound />} /> 
        
        </Routes>   
    </UserAuthContextProvider>   
</CartContext>
            <p> {process.env.REACT_APP_VERSION}</p>
<Footer/>
</>


)}


export default App;


