import {Routes, Route} from 'react-router';
import './App.css';
import Header from './Components/Header';
import ItemListContainer from './Components/Products/ItemListContainer';
//import ItemList from './Components/Products/ItemList';
import ItemDetailContainer from './Components/Products/ItemDetailContainer';



const App= ()=> {
return(
        <>
        <Header />
       
        <Routes>
            <Route path="/" element={ <ItemListContainer /> }/>
            <Route exact path="/products" element={<ItemListContainer/>}/>
            <Route exact path="/item/:id" element={<ItemDetailContainer/> }/>
        </Routes>
        
        </>

)}


export default App;


