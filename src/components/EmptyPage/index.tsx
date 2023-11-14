import React from "react";
import * as Styled from './styled'
function EmptyPage() {
  return (
    <Styled.EmptyPageContainer>
      <div className="icon">😥</div>
      <div className="title">Nada para ver aqui!</div>
      <div className="desc">
        A lista de produtos parece estar vazia.
      </div>
    </Styled.EmptyPageContainer>
  );
}

export default EmptyPage;
