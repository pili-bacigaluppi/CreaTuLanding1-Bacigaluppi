import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { initializeApp } from "firebase/app";
import App from './App.jsx'

const firebaseConfig = {
  apiKey: "AIzaSyAQAU6AX-ev8SLl20-32-ezlO4QZL_FVb8",
  authDomain: "coffa-react.firebaseapp.com",
  projectId: "coffa-react",
  storageBucket: "coffa-react.firebasestorage.app",
  messagingSenderId: "398355585603",
  appId: "1:398355585603:web:d6af190e108405875d12f6"
};
initializeApp(firebaseConfig);
createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>,
)
