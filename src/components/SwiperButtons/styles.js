import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 5px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 50%;

    padding: 0.5rem;

    box-shadow: rgba(133, 106, 196, 0.3) 4px 4px;  
}

  .left-button {
    svg {
      transform: translateX(-1px);
    }  
  }

  .right-button {
    svg {
      transform: translateX(1px);
    }  
  }
`;