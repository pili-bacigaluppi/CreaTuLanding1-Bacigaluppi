import { useState, useEffect, createContext } from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";
import Error from "./components/Error/Error";
import CartItemContainer from './components/Cart/CartItemContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
export const CartItems = createContext([]);

function App() {
  //firebase
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const db = getFirestore();
  useEffect(() => {
    const itemCollection = collection(db, "items");
    getDocs(itemCollection).then((snapshot) => {
      const itemsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setItems(itemsData);
      setLoading(false);
    });
  }, []);
  //context
  const [cNumber, setcNumber] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (item, quantity) => {
    setCartItems(prev => [...prev, { ...item, quantity }]);
    setcNumber(prev => prev + quantity);
  };
  const [cartTotal, setCartTotal] = useState(0);
  const addtoCartTotal = (total) => {
    setCartTotal(prev => prev + total);
  };
  return (
    <CartItems.Provider value={{cNumber, cartItems, addToCart, cartTotal,addtoCartTotal, setCartItems, setCartTotal, setcNumber}}>
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes>
            {loading ? (
              <Route path="*" element={
                <div className="loading-container">
                  <h2 className="loadingP">Loading...</h2>
                </div>
              } />
            ) : (
              <>
                <Route index element={<ItemListContainer items={items} />} />
                <Route path="products" element={<ItemListContainer items={items} />} />
                <Route path="category/:categoryId" element={<ItemListContainer items={items} />} />
                <Route path="item/:id" element={<ItemDetailContainer items={items} />} />
                <Route path="cart" element={<CartItemContainer />} />
                <Route path="*" element={<Error />} />
              </>
            )}
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </CartItems.Provider>
  );
}
export default App;
