import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;

  .overlay {
    position: absolute;
    width: 100%;
    height: 75rem;
    background-image: linear-gradient(90deg, #191232D4 0%, #151515 80%);
    opacity: 0.8;
  }
`;

export const InovaBackground = styled.div`
  position: relative;
  width: calc(100% - 2rem);
  
  img {
    width: 100%;
    object-fit: contain;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const Content = styled.div`
  max-width: 120rem;
  height: 75rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 4rem 2rem;
  gap: 4rem;

  margin: 0 auto;

  @media (min-width: 800px) {
    flex-direction: row;
    height: 75rem;

    gap: 12rem;
    padding: 8rem 2rem;
  }
`;

export const LeftDiv = styled.div`
  @media (min-width: 800px) {
    padding-left: 20rem;
  }

  @media (min-width: 1000px) {
    padding-left: 25rem;
  }

  h2 {
    width: 10rem;
    position: relative;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR_ONE};
    font-size: clamp(3rem, 4vw, 5.1rem);
    text-transform: uppercase;

    @media (min-width: 850px) {
      width: 14rem;
    }

    &::before {
      position: absolute;
      content: "";
      height: 4px;
      width: 70%;
      background: ${({ theme }) => theme.COLORS.BLACK};

      left: 3rem;
      bottom: -1rem;

      @media (min-width: 1100px) {
        width: 75%;
      }
    }
  }
`;

export const RightDiv = styled.div`
  width: 100%;

  p {
    margin: 1rem 0;
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR_TWO};
    text-align: center;
    font-size: clamp(1.4rem, 3.5vw, 1.8rem);
    line-height: 150%;

    @media (min-width: 340px) {
      margin: 2rem 0;
    }

    @media (min-width: 800px) {
      margin: 1rem 0;
      width: 80%;
      text-align: start;
    }

    @media (min-width: 1000px) {
      width: 70%;
    }

    @media (min-width: 1200px) {
      width: 60%;
    }
  }
`;