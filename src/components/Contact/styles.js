import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 120rem;
  margin: 0 auto;

  padding: 6rem 2rem;
  gap: 4rem;
  
  @media (min-width: 800px) {
    flex-direction: row;
    padding: 12rem 2rem;
    gap: 10rem;
  }

  @media (min-width: 1100px) {
    gap: 18rem;
  }
`;

export const LeftDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  gap: 3rem;
  
  .text-div {
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
  }
`;

export const FormDiv = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;

  gap: 2rem;

  input, textarea {
    background: ${({ theme }) => theme.COLORS.PURPLE_800};
    border: 1px solid ${({ theme }) => theme.COLORS.PURPLE_200};
  }

  .input-div {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;

    gap: 2rem;

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;

      flex: 1;
      gap: 1rem;

      label {
        width: 1px;
        height: 1px;
        position: absolute;
        color: ${({ theme }) => theme.COLORS.TEXT_COLOR_ONE};
      }

      input {
        position: relative;
        padding: 1rem;

        border-radius: 5px;
        border: none;

        color: ${({ theme }) => theme.COLORS.TEXT_COLOR_TWO};
        font-size: 1.6rem;
        
        &::placeholder {
          color: ${({ theme }) => theme.COLORS.GRAY_100};
        }

        &:focus {
          outline: transparent;
          box-shadow: 0 0 0 2px ${({ theme }) => theme.COLORS.PURPLE_200};
        }
      }

      span {
        color: red;
      }
    }
  }

  .textarea-div {
    display: flex;
    flex-direction: column;

    gap: 1rem;
    
    label {
      color: ${({ theme }) => theme.COLORS.TEXT_COLOR_ONE};
      width: 1px;
      height: 1px;
      position: absolute;
      overflow: hidden;
    }

    textarea {
      position: relative;
      color: ${({ theme }) => theme.COLORS.TEXT_COLOR_TWO};
      padding: 1rem;
      font-size: clamp(1.4rem, 4vw, 1.6rem);

      resize: none;
      border: none;

      &::placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
      }

      &:focus {
        outline: transparent;
        box-shadow: 0 0 0 2px ${({ theme }) => theme.COLORS.PURPLE_200};
      }
    }
  }

  .button-span {
    display: flex;
    align-items: center;
    
    gap: 1rem;

    button {
      width: max-content;
      border-radius: 5px;
  
      padding: 1rem 3rem;
      border: none;
  
      font-size: 1.6rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
  
      background: ${({ theme }) => theme.COLORS.PURPLE_800};

      &:focus {
        outline: transparent;
        box-shadow: 0 0 0 2px ${({ theme }) => theme.COLORS.PURPLE_200};
      }
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${({ theme }) => theme.COLORS.SUCCESS};
    }
  }
`;

export const RightDiv = styled.div`
  width: 100%;
  max-width: 40rem;
  display: flex;
  flex-direction: column;

  gap: 2rem;

  color: ${({ theme }) => theme.COLORS.TEXT_COLOR_ONE};

  ul {
    display: flex;
    flex-direction: column;

    gap: 4rem;
  }
`;

export const Step = styled.li`
  width: 100%;
  display: flex;

  gap: 2rem;

  color: ${({ theme }) => theme.COLORS.TEXT_COLOR_TWO};
  font-size: clamp(1.6rem, 2vw, 1.8rem);

  span {
    min-width: 2.1rem;
    font-size: 2.5rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;