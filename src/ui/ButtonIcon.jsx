import styled from "styled-components";

const ButtonIcon = styled.button`
  background: none;
  border: none;
  padding: 0.6rem;
  border-radius: 4px;
  transition: all 0.2s;

  &:hover {
    background-color: #f3f4f6;
  }

  & svg {
    font-size: 2.4rem;
    color: var(--color-brand-400);
  }
`;

export default ButtonIcon;
