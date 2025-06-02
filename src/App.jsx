import { useState,useEffect } from 'react'
import Layout from './components/Layout/Layout';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";
import Error from "./components/Error/Error";
import { products } from "./components/Data/Product";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  const [items,setItems] = useState([]);
  useEffect(() => {
    const fetchProducts = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products)
      },1000)
    })
    fetchProducts.then((data) => {
      setItems(data);
    })
  },[])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ItemListContainer items={items} />} />
          <Route path="products" element={<ItemListContainer items={items} />} />
          <Route path="category/:categoryId" element={<ItemListContainer items={items} />} />
          <Route path="item/:id" element={<ItemDetailContainer/>} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App