import styled, { css } from "styled-components";

const headingAs = {
  h1: css`
    font-size: 3rem;
    font-weight: 600;
  `,

  h2: css`
    font-size: 2.4rem;
    font-weight: 600;
    text-align: center;
    font-family: "Open Sans", sans-serif;
    color: #fff;
    margin-bottom: 30px;
  `,

  h3: css`
    color: var(--color-brand-400);
    font-size: 2.4rem;
    margin-bottom: 2rem;
    line-height: 1.5;
    letter-spacing: 1px;
    text-transform: capitalize;
  `,

  h4: css`
    text-align: right;
    padding: 0 2rem;
    color: var(--color-brand-400);
    font-size: 2rem;
    margin-bottom: 2rem;
    line-height: 1.5;
    letter-spacing: 1px;
    text-transform: capitalize;
    padding: 0rem 3.2rem;

    & a {
      text-decoration: underline;
    }
  `,
};

const Heading = styled.h1`
  line-height: 1.4;

  ${({ as }) => headingAs[as]}
`;

Heading.defaultProps = {
  as: "h1",
};

export default Heading;
