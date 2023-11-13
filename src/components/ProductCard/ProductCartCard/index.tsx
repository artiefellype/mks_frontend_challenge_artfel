import React from "react";
import * as Styled from "./styled";
import Image from "next/image";
import CardSpinButton from "@/components/CardSpinButtons";

function ProductCartCard() {
  return (
    <Styled.CardContainer>
      <Styled.CardProductImgContainer>
        <img
          src={
            "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp"
          }
          alt={"Imagem do produto"}
          
        />
      </Styled.CardProductImgContainer>
      <Styled.CardProductInfoContainer>
        <Styled.CardProductTitle>Iphone 11 128 GB</Styled.CardProductTitle>
      </Styled.CardProductInfoContainer>
      <Styled.CardProductSpinAndPriceMobileChange>
      <Styled.CardProductSpinButtonContainer>
        <p>Qtd:</p>
        <CardSpinButton />
      </Styled.CardProductSpinButtonContainer>
      <Styled.CardProductPrice>
        {" "}
        <p>R$399</p>{" "}
      </Styled.CardProductPrice>
      </Styled.CardProductSpinAndPriceMobileChange>
      <button className="close-card-button"> X </button>
    </Styled.CardContainer>
  );
}

export default ProductCartCard;
