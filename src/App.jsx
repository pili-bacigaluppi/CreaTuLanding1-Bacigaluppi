import { useState,useEffect } from 'react'
import { createContext } from 'react';
import Layout from './components/Layout/Layout';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";
import Error from "./components/Error/Error";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
export const CartNumber = createContext(0);
import { getFirestore,collection,getDocs } from 'firebase/firestore';
function App() {
  //firebase
  const [items,setItems]=useState([]);
  const db = getFirestore();
  useEffect(()=>{
    const itemCollection = collection(db,"items");
    getDocs(itemCollection).then((snapshot) => {
    const itemsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setItems(itemsData);
  });
  },[]);
  // context
  const [cNumber, setcNumber]=useState(0);
  const addToCartNumber = (quantity = 1) => {
    setcNumber(prev => prev + quantity);
  }
  return (
    <CartNumber.Provider value={{cNumber,addToCartNumber}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ItemListContainer items={items} />} />
            <Route path="products" element={<ItemListContainer items={items} />} />
            <Route path="category/:categoryId" element={<ItemListContainer items={items} />} />
            <Route path="item/:id" element={<ItemDetailContainer items={items} />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartNumber.Provider>
  );
}
export default App