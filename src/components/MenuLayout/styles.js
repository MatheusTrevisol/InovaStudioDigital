import styled from 'styled-components';

export const Container = styled.section`
  position: fixed;
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  top: 0px;
  left: 0;
  opacity: 0.9;

  backdrop-filter: blur(4px);
  background: linear-gradient(34deg, rgba(0,0,0,1) 0%, rgba(46,0,46,1) 95%);

  animation: MenuAnimation 0.1s ease-out;

  @keyframes MenuAnimation {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }

  > svg {
    position: absolute;
    top: 2.6rem;
    right: 6rem;
    z-index: 9;

    color: ${({ theme }) => theme.COLORS.WHITE};

    @media (max-width: 1099px) {
      right: 3rem;
    }
  }
`;

export const Links = styled.nav`
  > ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    font-size: 2.5rem;
    text-transform: lowercase;
    
    a {
      color: ${({ theme }) => theme.COLORS.PURPLE_200} 
    }
  }
`;