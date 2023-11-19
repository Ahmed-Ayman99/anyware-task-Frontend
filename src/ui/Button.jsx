import styled, { css } from "styled-components";

const variations = {
  fill: css`
    background-color: var(--color-brand-400);
  `,

  regular: css`
    background-color: var(--color-brand-100);
    color: rgb(17, 27, 33);
  `,
};

const Button = styled.button`
  color: #ffffff;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  border: none;
  padding: 8px 15px;

  &:focus {
    outline: none;
  }

  ${({ variation }) => variations[variation]}
`;

Button.defaultProps = {
  variation: "regular",
};

export default Button;
