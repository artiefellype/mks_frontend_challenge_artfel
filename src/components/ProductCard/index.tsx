import React from "react";
import * as Styled from "./styled";
import Image from "next/image";

export interface ProductCardProps {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
}

function ProductCard({name, brand, description, photo, price}: ProductCardProps) {
  return (
    <Styled.CardContainer>
      <Styled.CardProductContainer>
        <Styled.CardProductImgContainer>
          <Image
            src={
              photo
            }
            alt={"Imagem do produto"}
            width={130}
            height={140}
          ></Image>
        </Styled.CardProductImgContainer>
        <Styled.CardProductInfoContainer>
          <Styled.CardProductTitle>
            {`${brand} ${name}`}
          </Styled.CardProductTitle>
          <Styled.CardProductPrice>
            {" "}
            <p>R${price}</p>{" "}
          </Styled.CardProductPrice>
        </Styled.CardProductInfoContainer>
        <Styled.CardProductDescription>
          <p>
            {description}
          </p>
        </Styled.CardProductDescription>
      </Styled.CardProductContainer>
      <Styled.CardShopButton>
        <div>
          <Image src={"/icons/shopping-bag.svg"} alt={""} width={12} height={13.5}></Image>

          <h3>COMPRAR</h3>
        </div>
      </Styled.CardShopButton>
    </Styled.CardContainer>
  );
}

export default ProductCard;
