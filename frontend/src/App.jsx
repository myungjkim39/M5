import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import './App.css'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/product" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
