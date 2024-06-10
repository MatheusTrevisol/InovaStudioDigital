import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 18rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  margin-top: 3rem;

  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  transform-style: preserve-3d;
  opacity: 1;

  @media (min-width: 800px) {
    height: 50rem;
  }

  > div {
    width: 120vw;
    overflow: hidden;

    img {
      width: 100%;
      height: 8rem;
      object-fit: cover;

      will-change: transform;
      transform: translate3d(3.3349vw, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
      transform-style: preserve-3d;

      @media (min-width: 800px) {
        height: 10rem;
      }

      @media (min-width: 1200px) {
        height: 12rem;
      }
    }
  }

  .range-one {
    transform: rotate(-3deg);

    margin-bottom: -2rem;

    @media (min-width: 1200px) {
      transform: rotate(-2deg);
    }
  }

  .range-two {
    transform: rotate(-10deg);
    margin-top: -3rem;

    @media (min-width: 800px) {
      transform: rotate(-6deg);
      margin-top: -2rem;
    }

    @media (min-width: 1200px) {
      transform: rotate(-5deg);
      margin-top: -3rem;
    }
  }

  .range-three {
    transform: rotate(4deg);
    margin-top: -6rem;

    @media (min-width: 800px) {
      margin-top: -9rem;
    }

    @media (min-width: 1200px) {
      transform: rotate(2deg);
      margin-top: -11rem;
    }
  }
`;