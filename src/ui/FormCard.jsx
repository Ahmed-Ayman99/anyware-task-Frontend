import styled from "styled-components";

export const FormCard = styled.div`
  border-radius: 1rem;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.3);
  width: 40rem;
  background-color: #ffffff;
  padding: 1rem 3rem;
`;

export const CardTitle = styled.div`
  text-align: center;
  padding: 1rem;

  & a {
    color: #4796ff;
  }
`;

export const StyledScreen = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to right bottom, #92a1ad, #1c1c28);
`;
