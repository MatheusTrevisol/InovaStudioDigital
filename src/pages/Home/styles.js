import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-width: 28rem;
  
  overflow-x: hidden;
  background: ${({ theme }) => theme.COLORS.BACKGROUND};

  main {
    margin: 0 auto;
  }
`;