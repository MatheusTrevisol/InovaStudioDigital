import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  background: ${({ theme }) => theme.COLORS.LINEAR_GRADIENT};

  padding: 6rem 0;

  @media (min-width: 1200px) {
    padding: 12rem 0 6rem;
  }
`;

export const Content = styled.div`
  position: relative;
  max-width: 120rem;
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  padding: 0 2rem;
  gap: 3rem;

  a {
    width: max-content;
    align-self: center;

    padding: 1rem 1rem 0.5rem;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.COLORS.TEXT_COLOR_ONE};

    color: ${({ theme }) => theme.COLORS.TEXT_COLOR_ONE};

    animation: bouce 0.9s infinite;
  }

  @keyframes bouce {
    50% {
      transform: translateY(10px);
    }
  }
`;

export const TextBox = styled.div`
  display: flex;
  max-width: 38rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  color: ${({ theme }) => theme.COLORS.TEXT_COLOR_ONE};
  text-align: center;
  
  @media (min-width: 1300px) {
    max-width: 50rem;
  }
  
  h2 {
    font-size: clamp(3rem, 3vw, 5.2rem);
    font-weight: 800;
    line-height: 120%;
    
    span {
      white-space: pre-wrap;
      margin-left: 5px;
      font-size: clamp(1.6rem, 2vw, 1.8rem);
    }
  }
`;