import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  background: ${({ theme }) => theme.COLORS.LINEAR_GRADIENT};
`;

export const Content = styled.div`
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  max-width: 120rem;
  
  margin:  0 auto;

  padding: 0 2rem;

  > h1 {
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR_ONE};
  }
`;

export const Navbar = styled.nav`
  font-size: 2rem;

  > button {
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR_ONE};
    background: none;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 2rem;

    @media (min-width: 800px) {
      gap: 3rem;
    }
    
    @media (min-width: 1200px) {
      gap: 4rem;
    }
  }

  a {
    position: relative;
    transition: border-bottom 0.2s;
    text-transform: lowercase;

    font-family: "Ubuntu", sans-serif;
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR_TWO};
    font-size: 2rem;
    font-weight: 200;
    list-style: none;
    text-decoration: none;
    border: none;
  }

  a::after {
    height: 2px;
    width: 0;
    content: "";
    position: absolute;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    left: 0;
    bottom: -4px;
    transition: 0.2s;
    border: none;
  }

  a:hover {
    color: ${({ theme }) => theme.COLORS.WHITE};
    transition: color 0.1s ease;
    border: none;
  }
  
  a:hover:after {
    width: 100%;
    border: none;
  }
`;