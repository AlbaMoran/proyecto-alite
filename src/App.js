import {Routes, Route} from 'react-router';
import './App.css';
import Header from './Components/Header';
import ItemListContainer from './Components/Products/ItemListContainer';
import ItemList from './Components/Products/ItemList';
import Login from './Components/LoginComponents/Login';
import SignUp from './Components/LoginComponents/SignUp';
import { UserAuthContextProvider } from './Components/context/UserAuthContext';




const App= ()=> {
return(
<>


    <Header />
    <UserAuthContextProvider>
        <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
        
            <Route path="/tienda" element={<ItemListContainer/>}/>
        
            <Route path="/login" element={<Login/>}/>

            <Route path="/itemList" element={<itemList/>}/>

            <Route path="/registrarse" element={<SignUp/>}/>
        </Routes>   
    </UserAuthContextProvider>     
</>

)}


export default App;


