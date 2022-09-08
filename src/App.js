import {Routes, Route} from 'react-router';
import './App.css';
import Header from './Components/Header';
import ItemListContainer from './Components/ItemListContainer';
import ItemList from './Components/Products/ItemList';




const App= ()=> {
return(
<>


    <Header />
    <ItemListContainer greeting= " Este espacio será destinado a la tienda de productos"/> 
    <Routes>
        <Route path="/itemList" element={<ItemList/>}/>

    </Routes>
    

</>

)}


export default App;


