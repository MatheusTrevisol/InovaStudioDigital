import { styled } from "styled-components";

export const Container = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
    
  white-space: nowrap;

  border: none;
  border-radius: 30px;

  padding: 1.5rem;
  gap: 5px;

  color: ${({ theme }) => theme.COLORS.BLACK};
`;