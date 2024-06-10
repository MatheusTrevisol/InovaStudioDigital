import { styled } from "styled-components";

export const Container = styled.section`
  width: 100%;

  @media (min-width: 800px) {
    /* padding: 8rem 0;  */
  }
`;

export const Content = styled.div`
  max-width: 120rem;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;

  gap: 4rem;
  padding: 4rem 2rem;

  margin: 0 auto;

  @media (min-width: 1200px) {
    gap: 8rem;
    padding: 6rem 2rem 15rem;
  }
`;

export const TextBox = styled.div`
  max-width: 75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  gap: 1rem;
  margin: 0 auto;

  color:  ${({ theme }) => theme.COLORS.TEXT_COLOR_ONE};

  h2 {
    font-size: clamp(3.5rem, 5vw, 8rem);
    letter-spacing: 8px;
    font-weight: 800;

    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 1px ${({ theme }) => theme.COLORS.TEXT_COLOR_TWO};
  }

  h4 {
    font-size: clamp(2.4rem, 2.5vw, 3.5rem);
    font-weight: 500;
    text-transform: uppercase;
    -webkit-text-stroke: 1px ${({ theme }) => theme.COLORS.TEXT_COLOR_TWO};
  }
`;

export const ServicesBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  flex-wrap: wrap;

  gap: 2rem;

  @media (min-width: 1200px) {
    justify-content: space-between;
  }

  > div:nth-child(1) {
    &:hover {
      color: ${({ theme }) => theme.COLORS.SVG_BRANDING};
      border-left: 3px solid ${({ theme }) => theme.COLORS.SVG_BRANDING};;
    }

    svg {
      color: ${({ theme }) => theme.COLORS.SVG_BRANDING};
    }
  }

  > div:nth-child(2) {
    &:hover {
      color: ${({ theme }) => theme.COLORS.SVG_SEO};
      border-left: 3px solid ${({ theme }) => theme.COLORS.SVG_SEO};;
    }

    svg {
      color: ${({ theme }) => theme.COLORS.SVG_SEO};
    }
  }

  > div:nth-child(3) {
    &:hover {
      color: ${({ theme }) => theme.COLORS.SVG_PHOTOGRAPHY};
      border-left: 3px solid ${({ theme }) => theme.COLORS.SVG_PHOTOGRAPHY};;
    }

    svg {
      color: ${({ theme }) => theme.COLORS.SVG_PHOTOGRAPHY};
    }
  }

  > div:nth-child(4) {
    &:hover {
      color: ${({ theme }) => theme.COLORS.SVG_DESIGN};
      border-left: 3px solid ${({ theme }) => theme.COLORS.SVG_DESIGN};;
    }

    svg {
      color: ${({ theme }) => theme.COLORS.SVG_DESIGN};
    }
  }
  
  > div:nth-child(5) {
    &:hover {
      color: ${({ theme }) => theme.COLORS.SVG_SOCIAL};
      border-left: 3px solid ${({ theme }) => theme.COLORS.SVG_SOCIAL};;
    }

    svg {
      color: ${({ theme }) => theme.COLORS.SVG_SOCIAL};
    }
  }
  
  > div:nth-child(6) {
    &:hover {
      color: ${({ theme }) => theme.COLORS.SVG_MARKETING};
      border-left: 3px solid ${({ theme }) => theme.COLORS.SVG_MARKETING};;
    }

    svg {
      color: ${({ theme }) => theme.COLORS.SVG_MARKETING};
    }
  }

  p {
    color:  ${({ theme }) => theme.COLORS.TEXT_COLOR_TWO};
  }
`;

export const Service = styled.div`
  max-width: 36rem;
  position: relative;
  display: flex;
  flex-direction: column;
  border-left: 3px solid ${({ theme }) => theme.COLORS.BACKGROUND_TWO};;

  gap: 1rem;
  padding: 2rem;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_TWO};
  color:  ${({ theme }) => theme.COLORS.TEXT_COLOR_ONE};

  will-change: transform;
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  transform-style: preserve-3d;

  @media (min-width: 790px) {
    height: 35rem;
  }

  @media (min-width: 1200px) {
    max-width: 37rem;
  }

  span {
    position: absolute;
    right: 1rem;
    top: 1rem;

    font-size: 6rem;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 1px ${({ theme }) => theme.COLORS.TEXT_COLOR_TWO};
  }

  h3 {
    font-size: 2.5rem;
  }

  p {
    font-size: clamp(1.4rem, 3vw, 1.6rem);
    font-weight: 200;
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR_TWO};
  }
`;