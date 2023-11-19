import styled from "styled-components";

import { FaEnvelope } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaBell } from "react-icons/fa";
import { BE_URL_Img } from "../utils/constants";
import useUser from "../features/authentication/useUser";
import Logout from "../features/authentication/Logout";

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 1.2rem 4.8rem;
  background-color: #fff;
  position: sticky;
  top: 0;
  z-index: 1;
`;

const Heading = styled.h3`
  margin-right: auto;
  text-transform: capitalize;
  font-size: 2.4rem;
  font-weight: 600;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 1.2rem;
  flex: 1;
`;

const Form = styled.form`
  border: 1px solid var(--color-brand-400);
  min-width: 10rem;
  border-radius: 2rem;
  overflow: hidden;
  display: flex;
  align-self: stretch;
  height: 3.8rem;
  margin: auto 0;
`;

const ButtonSearch = styled.button`
  background-color: #eee;
  width: 15%;
  outline: none;
  border: none;
  transition: all 0.5s;

  & svg {
    transition: all 0.5s;
    color: var(--color-brand-400);
    font-size: 1.8rem;
  }

  &:hover {
    background-color: var(--color-brand-400);
    & svg {
      color: #fff;
    }
  }
`;

const Input = styled.input`
  border: none;
  outline: none;
  width: 85%;
  padding: 1rem;
  font-size: 1.4rem;
  caret-color: var(--color-brand-400);
`;

const IconBox = styled.button`
  position: relative;
  display: block;
  border: none;
  width: 2.2rem;
  aspect-ratio: 1/1;
  display: flex;
  align-items: center;
  justify-content: center;

  & span {
    position: absolute;
    top: 0;
    right: 0;
    width: 1.6rem;
    font-size: 1.2rem;
    aspect-ratio: 1/1;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translate(50%, -50%);
    border-radius: 50%;
    padding: 1px;
    color: #fff;
  }

  & svg {
    width: 100%;
    height: 100%;
    font-size: 2rem;
    color: var(--color-brand-400);
  }
`;

const Avatar = styled.div`
  width: 4.8rem;
  aspect-ratio: 1/1;

  border-radius: 50%;
  overflow: hidden;
  & img {
    object-fit: cover;
  }
`;

const MainHeader = () => {
  const { user } = useUser();

  return (
    <Header>
      <Heading>Welcome, {user.name.split(" ")[0]}</Heading>

      <SearchBar>
        <Form>
          <ButtonSearch>
            <CiSearch />
          </ButtonSearch>
          <Input type="text" placeholder="Search" />
        </Form>

        <IconBox>
          <span>5</span>
          <FaBell />
        </IconBox>

        <IconBox>
          <span>3</span>
          <FaEnvelope />
        </IconBox>

        <Avatar>
          <img alt={user.name} src={`${BE_URL_Img}/users/${user.avatar}`} />
        </Avatar>

        <Logout />
      </SearchBar>
    </Header>
  );
};

export default MainHeader;
