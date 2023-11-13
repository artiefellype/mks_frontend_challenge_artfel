import React from "react";
import * as Styled from "./styled";
import Image from "next/image";

interface CartButtonProps {
  itensQuantity: number;
  isOpen: (item: boolean) => void;
}
function CartButton({ itensQuantity, isOpen }: CartButtonProps) {
  return (
    <Styled.CartButton onClick={() => isOpen(true)}>
      <Image
        src={"/icons/shopping-cart.svg"}
        alt={"shop cart icon"}
        width={19}
        height={18}
      />
      <p>{itensQuantity ? itensQuantity : 0}</p>
    </Styled.CartButton>
  );
}

export default CartButton;
