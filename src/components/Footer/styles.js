import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_TWO};
`;

export const Content = styled.div`
  max-width: 120rem;
  
  margin: 0 auto;
  padding: 4rem 2rem 2rem;
`;

export const NavBar = styled.nav`
  display: flex;
  flex-direction: column;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.TEXT_COLOR_ONE};

  gap: 5rem;

  padding-bottom: 4rem;
  
  @media (min-width: 800px) {
    flex-direction: row;
    justify-content: space-between;
  }
  
  > h1 {
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR_ONE};
    text-align: center;
  }

  ul {
    display: flex;
    align-items: left;
    flex-direction: column;

    gap: 1rem;

    @media (min-width: 800px) {
      align-items: flex-end;
      justify-content: flex-end;
    }

    h3 {
      margin-bottom: 1rem;

      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: clamp(1.8rem, 2vw, 2.2rem);
    }

    a, button {
      color: ${({ theme }) => theme.COLORS.TEXT_COLOR_TWO};
      font-size: clamp(1.4rem, 2vw, 1.8rem);

      background: none;
      border: none;
    }

    a:hover, button:hover {
      color: ${({ theme }) => theme.COLORS.WHITE};
      transition: color 0.1s ease;
    }
  }
`;

export const Navigation = styled.div`
  display: flex;
  justify-content: space-around;

  @media (min-width: 800px) {
    gap: 6rem;
  }
`;

export const LastLine = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.COLORS.BACKGROUND};

  > div {
    max-width: 120rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem 2rem;

    gap: 2rem;
      
    @media (min-width: 800px) {
      flex-direction: row;
      justify-content: flex-start;
      gap: 3rem;
    }

    @media (min-width: 1400px) {
      justify-content: space-between;
    } 
  }

  p {
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR_ONE};
    font-size: clamp(1.4rem, 2vw, 1.8rem);
    text-align: center;
  }
  
  button {
    padding: 0 0.5rem;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    border: none;
  }
`;