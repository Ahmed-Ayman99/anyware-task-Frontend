import styled from "styled-components";

const Row = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto 2rem;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    margin-bottom: 1.2rem;
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

const FormRow = ({ children, label, error }) => {
  return (
    <Row>
      {label && <Label htmlFor={children.props?.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </Row>
  );
};

export default FormRow;
