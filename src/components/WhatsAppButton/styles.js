import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;

  z-index: 999;

  &:hover span {
    visibility: visible;
    opacity: 1;
    transform: translateX(-21rem) translateY(1.2rem);
    
    transition-delay: 0s;
  }
  
  > div {
    position: relative;

    span {
    position: absolute;
    padding: 1rem;
    border-radius: 10px;
    color: ${({ theme }) => theme.COLORS.BLACK};
    font-size: 1.6rem;
    width: max-content;

    background-color: ${({ theme }) => theme.COLORS.TEXT_COLOR_TWO};

    opacity: 0;
    visibility: hidden;
    transform: translateX(-15rem) translateY(1.2rem);

    transition: 0.3s all cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transition-delay: 0s;

    &::before {
      position: absolute;
      content: "";
      bottom: -5px;
      left: 50%;

      background-color: ${({ theme }) => theme.COLORS.TEXT_COLOR_TWO};
      }
    }
  }
`;

export const ButtonWhats = styled.button`
  position: relative;
  display: block;

  padding: 1.2rem 1.2rem 0.8rem;
  background-color: ${({ theme }) => theme.COLORS.SUCCESS};
  
  border-radius: 50%;
  border: none;
  
  animation: pulse 3s infinite;
  
  transition: 0.3s all ease-in-out;
  
  &:hover {
    animation: shake 1s infinite; 
  }

  > svg {
    color: ${({ theme }) => theme.COLORS.WHITE};
    pointer-events: none;
    z-index: 5;
  }
  
  @keyframes shake {
    0% {
      transform: rotate(10deg) scale(1.05);
    }

    50% {
      transform: rotate(-10deg) scale(1.05);
    }

    100% {
      transform: rotate(10deg) scale(1.05);
    }
  }

  @keyframes pulse {
    0% {
      transform: rotate(10deg) scale(1.05);
    }

    50% {
      transform: rotate(-10deg) scale(0.9);
    }

    100% {
      transform: rotate(10deg) scale(1.05);
    }
  }
`