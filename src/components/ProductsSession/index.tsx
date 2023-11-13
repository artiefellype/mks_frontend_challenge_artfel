import React from "react";
import * as Styled from "./styled";
import { ProductProps, ProductsSectionProps } from "@/types";
import ProductCard from "../ProductCard";

function ProductsSection({ products, addToCart }: ProductsSectionProps) {
  return (
    <Styled.Container>
      <Styled.ProductsContainer>
        {products.map((item: ProductProps) => {
          return <ProductCard product={item} addToCart={addToCart} />;
        })}
      </Styled.ProductsContainer>
    </Styled.Container>
  );
}

export default ProductsSection;
