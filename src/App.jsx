import { useState } from 'react'
import './App.css'

import { Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import ProductLayout from "./layouts/ProductLayout";
import Home from './Pages/Home';
import Products from './Pages/Products';

function App() {
  return (
      <div className="app">
            <Routes>
              <Route path="/" element={<RootLayout />}>
                <Route index element={<Home />} />
                <Route path="home" element={<Home />} />
              </Route>
              <Route path="/products" element={<ProductLayout />}>
                <Route index element={<Products />} />
              </Route>
            </Routes>
          </div>
        );
}

export default App;
