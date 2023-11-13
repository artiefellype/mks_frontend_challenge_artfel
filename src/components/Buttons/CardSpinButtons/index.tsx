import React from "react";
import * as Styled from "./styled";
import { CardSpinButtonProps } from "@/types";

function CardSpinButton({
  productQuantity,
  increase,
  decrease,
}: CardSpinButtonProps) {
  return (
    <Styled.CardProductSpinButtons>
      <button onClick={() => decrease()}>
        {" "}
        <p>-</p>{" "}
      </button>
      <hr />
      <div>
        {" "}
        <p>{productQuantity}</p>{" "}
      </div>
      <hr />
      <button onClick={() => increase()}>
        {" "}
        <p>+</p>{" "}
      </button>
    </Styled.CardProductSpinButtons>
  );
}

export default CardSpinButton;
