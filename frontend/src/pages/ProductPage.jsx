import React from "react";
import Header from ".././components/Header.jsx";
import Specs from ".././components/Specs.jsx";
import Tabs from ".././components/Tabs.jsx";
import RecommendedProducts from ".././components/RecommendedProducts.jsx";
import Footer from ".././components/Footer.jsx";

export default function ProductPage() {
  return (
    <div className="product-page">
      <Header />
      <Specs />
      <Tabs />
      <RecommendedProducts />
      <Footer />
    </div>
  );
}
