import styled from "styled-components";

export const CardProductSpinButtons = styled.div`
  width: 60px;
  height: 25px;
  border-radius: 4px;
  border: 0.3px solid #bfbfbf;
  background-color: white;
  margin-right: 15px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;

  hr {
    height: 15px;
  }

  div {
    width: 20%;
    display: flex;
    justify-content: center;
    p {
      font-size: 8px;
      font-weight: 400;
    }
  }

  button {
    border: none;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 20%;

    p {
      font-size: 10px;
      font-weight: 400;
    }
  }
`;
