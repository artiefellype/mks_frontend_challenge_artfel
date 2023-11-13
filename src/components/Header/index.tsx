import React, { useState } from "react";
import * as Styled from "./style";
import CartButton from "../CartButton";
import CartCheckoutMenu from "./CartCheckoutMenu";

function HeaderSection() {

  const [open, setOpen ] = useState(false)

  const handleCartMenuOpen = (isOpen: boolean) => {
    setOpen(isOpen)
  }

  console.log("AQUI: ", open)
  return (
    <>
    <CartCheckoutMenu isOpen={open} handleOpen={handleCartMenuOpen}/>
    <Styled.HeaderContainer>
      <Styled.LogoContainer>
        <h1>
          MKS <span>Sistemas</span>
        </h1>
      </Styled.LogoContainer>
      <CartButton itensQuantity={0} isOpen={handleCartMenuOpen}/>
    </Styled.HeaderContainer>
    
    </>
  );
}

export default HeaderSection;
