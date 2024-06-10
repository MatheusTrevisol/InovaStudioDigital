import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  background: ${({ theme }) => theme.COLORS.BROWN_100};

  margin: 0 auto;
  padding: 0 6rem;

  @media (max-width: 700px) {
    padding: 0 2rem;
  }
`;

export const Content = styled.div`
  max-width: 100rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 1.5rem;
  margin: 0 auto;
  border-radius: 5rem 5rem 0 0;

  @media (min-width: 900px) {
    gap: 0;
  }
`;

export const UpBenefits = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 2rem;

  @media (min-width: 900px) {
    flex-direction: row;
    gap: 0;
    
    > div:nth-child(2) {
      padding: 8rem 2rem;
    }
  }

  .benefit-squares {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 1.5rem;
    padding: 4rem 2rem 4rem;
    top: -10rem;

    text-align: center;
    background: ${({ theme }) => theme.COLORS.WHITE};

    h3 {
      font-size: 2.2rem;
      font-family: Montserrat,sans-serif;
      font-weight: 400;
    }

    .background-image {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 15rem;
      width: 15rem;
      background: ${({ theme }) => theme.COLORS.BROWN_100};

      border-radius: 50%;

      img {
        width: 10rem;
        height: 10rem;
      }
    }   
  }
`;

export const LogoBenefits = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  border-radius: 50%;
  height: 20rem;
  width: 20rem;

  img {
    position: absolute;
    height: 14rem;
    border-radius: 99px;
    background-size: cover;
  }

  .textdiv {
    position: absolute;
    width: 100%;
    height: 100%;

    animation: rotateText 10s linear infinite;

    @keyframes rotateText {
      0% {
        transform: rotate(360deg);
      }

      100% {
        transform: rotate(0deg);
      }
    }

    span {
      position: absolute;
      left: 50%;
      font-size: 1.4rem;
      transform-origin: 0 10rem;
    }
  }
`;

export const BottomBenefits = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  gap: 2rem;

  @media (min-width: 900px) {
    flex-direction: row;
    gap: 0;

    > div:nth-child(2) {
      padding: 8rem 2rem;
    }
  }

  .benefit-squares {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 2rem;
    padding: 4rem 2rem;
    bottom: -10rem;

    text-align: center;
    background: ${({ theme }) => theme.COLORS.WHITE}; 

    .background-image {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 15rem;
      width: 15rem;
      background: ${({ theme }) => theme.COLORS.BROWN_100};

      border-radius: 50%;

      img {
        width: 10rem;
        height: 10rem;
      }
    }
    
    h3 {
      font-size: 2.2rem;
      font-family: Montserrat,sans-serif;
      font-weight: 500;
    }
  }

`;