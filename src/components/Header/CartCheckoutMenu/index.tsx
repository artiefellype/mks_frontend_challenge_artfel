import React from 'react'
import * as Styled from './styled'
import ProductCartCard from '@/components/ProductCard/ProductCartCard'

interface CartChekoutMenuProps {
    isOpen: boolean
    handleOpen: (item: boolean) => void
}

function CartCheckoutMenu({isOpen, handleOpen}:CartChekoutMenuProps) {
  return (
    <Styled.CartMenuContainer open={isOpen}>
        <Styled.CartMenuTopItems>
            <Styled.CartMenuHeader >
                <h3>Carrinho de compras</h3>
                <button onClick={()=> handleOpen(false)}>X</button>
            </Styled.CartMenuHeader>
            <Styled.CartMenuProductsContainer>
                <ProductCartCard />
                <ProductCartCard />
                
            </Styled.CartMenuProductsContainer>
        </Styled.CartMenuTopItems>
        <Styled.CartMenuBottomItems>
            <Styled.CartMenuTotalPrice>
                <h3>Total:</h3>
                <h3>R$798</h3>
            </Styled.CartMenuTotalPrice>
            <Styled.CartMenuBuyButton>
                Finalizar compra
            </Styled.CartMenuBuyButton>
        </Styled.CartMenuBottomItems>
    </Styled.CartMenuContainer>
  )
}

export default CartCheckoutMenu