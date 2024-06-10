import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
`;

export const Content = styled.div`
  max-width: 120rem;
  margin: 0 auto;

  padding: 10rem 2rem 0;
`;

export const TextDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  margin-bottom: 3rem;
  gap: 2rem;
  
  .text-div {
    max-width: 58rem;
    flex: 1;
  }

  h1, p {
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR_TWO};
  }

  h1 {
    font-size: clamp(2.4rem, 4vw, 2.8rem);
    text-transform: uppercase;
  }

  p {
    margin-top: 5px;
    font-size: clamp(1.4rem, 4vw, 1.6rem);
  }
`;

export const PlansDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 2rem;
`;

export const Plan = styled.div`
  max-width: 35rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  margin: 0 auto;
  padding: 4rem 1rem 6rem;
  gap: 2rem;

  border: 1px solid ${({ theme }) => theme.COLORS.TEXT_COLOR_TWO};
  border-radius: 10px;

  svg {
    color: ${({ theme }) => theme.COLORS.PURPLE_100};
  }

  h3 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 2.4rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 1rem;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;

      color: ${({ theme }) => theme.COLORS.TEXT_COLOR_ONE};

      div {
        display: flex;
        align-items: center;
        justify-content: center;

        gap: 2px;
        
        svg {
          padding-top: 2px;
        }

        p {
          max-width: 20rem;
        }
      }

      span {
        font-size: 1.4rem;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
      }
    }
  }

  .buttons-div {
    position: relative;
    width: 20rem;
    height: 5rem;
    
    button {
      position: absolute;

      width: 20rem;
      height: 5rem;
      
      font-weight: 600;
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.BLACK};

      background: linear-gradient(360deg, rgba(220, 220, 220, 0.5) 23%, rgba(180, 180, 180, 0.5) 93%);

      border-radius: 2px;
      margin-top: 1rem;
      z-index: 3;
       
      svg {
        color: ${({ theme }) => theme.COLORS.SUCCESS};
      }

      &:nth-child(2) {
        background: linear-gradient(99deg, rgba(170,140,245,1) 22%, rgba(87,66,87,0.8183648459383753) 89%);
        bottom: -1.5rem;
        right: -0.5rem;
        z-index: 2;
      }
    }
  }
`;