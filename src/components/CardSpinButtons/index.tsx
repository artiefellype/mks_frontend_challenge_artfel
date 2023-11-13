import React from 'react'
import * as Styled from "./styled"

function CardSpinButton() {
  return (
    <Styled.CardProductSpinButtons>
        <button> <p>-</p> </button>
        <hr />
        <div> <p>1</p> </div>
        <hr />
        <button> <p>+</p> </button>
    </Styled.CardProductSpinButtons>
  )
}

export default CardSpinButton