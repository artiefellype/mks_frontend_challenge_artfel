import React from "react";
import * as Styled from "./styled";
import ProductCard, { ProductCardProps } from "../ProductCard";

import { useQuery } from "react-query";

function ProductsSection() {
  const fetchData = async () => {
    const response = await fetch(
      "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=ASC"
    );
    const data = await response.json();
    return data;
  };

  const { data, isLoading, isError } = useQuery("API_data", fetchData);

  if (isLoading) return <p>Carregando...</p>;
  if (isError) return <p>Erro ao buscar os dados</p>;

  console.log(data.products);

  return (
    <Styled.Container>
      <Styled.ProductsContainer>
        {data.products.map((item: ProductCardProps) => {
          return (
            <ProductCard
              id={item.id}
              name={item.name}
              brand={item.brand}
              description={item.description}
              photo={item.photo}
              price={item.price}
            />
          );
        })}
      </Styled.ProductsContainer>
    </Styled.Container>
  );
}

export default ProductsSection;
