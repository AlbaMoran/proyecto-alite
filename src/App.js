import {Routes, Route} from 'react-router';
import './App.css';
import Header from './Components/Header';
import ItemListContainer from './Components/Products/ItemListContainer';
import ItemList from './Components/Products/ItemList';
import Login from './Components/LoginComponents/Login';
import SignUp from './Components/LoginComponents/SignUp';
import { UserAuthContextProvider } from './Components/context/UserAuthContext';
import {ProtectedRoute} from './Components/LoginComponents/ProtectedRoute'
import Home from './Components/LoginComponents/Home'



const App= ()=> {
return(
<>


    <Header />
    <UserAuthContextProvider>
        <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/home" element={<ProtectedRoute> <Home/> </ProtectedRoute>}/>
            <Route path="/tienda" element={<ItemListContainer/>}/>
            <Route path="/itemList" element={<itemList/>}/>
       
           <Route path="/login" element={<Login/>}/>
            <Route path="/registrarse" element={<SignUp/>}/>
        </Routes>   
    </UserAuthContextProvider>     
</>

)}


export default App;


