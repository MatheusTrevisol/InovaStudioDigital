import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  background: url(http://lspmidia.com.br/wp-content/uploads/2024/01/Lsp-Midia-_2_.webp) left no-repeat;
  background-size: cover;

  overflow: hidden;
  
  @media (min-width: 800px) {
    background-position: center;
  }

  .black-gradient {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;

    background-image: linear-gradient(180deg,#00000069 0%,#000 100%);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 120rem;
  
  margin: 0 auto;
  padding: 6rem 2rem 2rem;

  @media (min-width: 800px) {
    padding: 6rem 2rem;
  }
`;

export const CenterDiv = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;

  gap: 1rem;

  .concept-conversion {
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR_ONE};
    font-weight: 100;
    text-transform: uppercase;
    letter-spacing: -2px;
    font-size: clamp(2.2rem, 4vw, 3rem);
    z-index: 3;

    .concept, .conversion {
      font-weight: 700;
      color: ${({ theme }) => theme.COLORS.PURPLE_100};
    }
  }

  .spans {
    display: flex;
    flex-direction: column;
    font-size: clamp(3.2rem, 5vw, 5.5rem);
    font-weight: 700;
    line-height: 100%; 
    color: ${({ theme }) => theme.COLORS.WHITE};
    z-index: 3;

    .lucrative {
      color: ${({ theme }) => theme.COLORS.PURPLE_100};
    }
  };

  p {
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR_TWO};
    font-size: clamp(1.4rem, 3vw, 1.8rem);
    font-weight: 200;
  }

  .buttons-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-top: 2rem;

    z-index: 3;

    a, button {
      width: 100%;
      height: 4rem;
      
      font-weight: 600;
      font-size: 1.4rem;

      color: ${({ theme }) => theme.COLORS.BLACK};
      background: ${({ theme }) => theme.COLORS.THIRD_GRADIENT};
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 30px;

      color: ${({ theme }) => theme.COLORS.BLACK};
    }

    span {
      transform: translateY(3px);
    }

    button {
      svg {
        color: ${({ theme }) => theme.COLORS.SUCCESS};
      }
    }

    .line-div {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${({ theme }) => theme.COLORS.WHITE};

      .line-buttons {
        flex: 1;
        height: 1px;
      };

      .line-left {
        margin-right: 1rem;
      };

      .line-right {
        margin-left: 1rem;
      };
    }
  }

  .scroll-down {
      display: flex;
      align-items: center;
      width: max-content;

      margin-top: 4rem;
      padding: 1rem 1rem 0.5rem;
      border-radius: 50%;

      color: ${({ theme }) => theme.COLORS.GRAY_100};

      animation: bouce 0.9s infinite;
    }

    @keyframes bouce {
      50% {
        transform: translateY(5px);
      }
    }
`;