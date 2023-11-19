import styled from "styled-components";
import { Link } from "react-router-dom";

const LinkStyle = styled(Link)`
  color: #fff;
  display: block;
  color: var(--color-brand-50);

  &:hover {
    background-color: var(--color-brand-400);
    color: #fff;
  }
`;

const ListItem = styled.li`
  padding: 2rem;
  align-items: center;
  display: flex;
  gap: 1.2rem;

  & svg {
    height: 2.5rem;
    width: 2.5rem;
    display: inline-block;
  }
`;

const SidebarListItem = ({ label, children, to }) => {
  return (
    <LinkStyle to={to}>
      <ListItem>
        {children}
        <span>{label}</span>
      </ListItem>
    </LinkStyle>
  );
};

export default SidebarListItem;
