import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  background-color: #e2e2e2;
  border: none;
  outline: none;
  padding: 0.8rem 0.8rem;
  border-radius: 4px;

  &:focus {
    outline: none;
    background-color: #d2d2d2;
  }
`;

export default Input;
