import styled from "styled-components";

const FileInput = styled.input`
  font-size: 1.4rem;
  border-radius: var(--border-radius-sm);

  &::file-selector-button {
    font: inherit;

    font-weight: 500;
    padding: 0.8rem 1.2rem;
    margin-right: 1.2rem;
    border-radius: var(--border-radius-sm);
    border: none;
    color: var(--color-gray-0);
    background-color: #0cbaba;
    cursor: pointer;
    transition:
      color 0.2s,
      background-color 0.2s;

    &:hover {
      background-color: #0caaaa;
    }
  }
`;

export default FileInput;
