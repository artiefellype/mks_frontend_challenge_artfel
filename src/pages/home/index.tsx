import Footer from "@/components/FooterSection";
import HeaderSection from "@/components/Header";
import ProductsSection from "@/components/ProductsSession";
import { CartContext } from "@/contexts/CartContext";
import React, { useContext, useState } from "react";
import { useQuery } from "react-query";

function Home() {
  const { cartProduct, handleRemoveCartProducts, handleAddCartProducts } =
    useContext(CartContext);

  const fetchData = async () => {
    const response = await fetch(
      "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=ASC"
    );
    const data = await response.json();
    return data;
  };
  const { data, isLoading, isError } = useQuery("api_data", fetchData);

  return (
    <>
      <HeaderSection
        cartProducts={cartProduct || []}
        removeFromCart={handleRemoveCartProducts}
      />
      {data && data.products ? (
        <ProductsSection
          products={data.products}
          isLoading={isLoading}
          addToCart={handleAddCartProducts}
        />
      ) : (
        <p>Loading...</p>
      )}
      <Footer />
    </>
  );
}

export default Home;
