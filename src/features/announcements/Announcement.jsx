import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import { BE_URL_Img } from "../../utils/constants";
import { formatDate } from "../../utils/helpers";

const AnnouncementComp = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 7.2rem 1fr;
  padding: 1rem 1.4rem;
  background-color: #fff;
  gap: 2.2rem;
  border-bottom: 1px solid #d1d7dc;
  margin-bottom: 8px;
`;

const Figure = styled.figure`
  & img {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
    overflow: hidden;
    object-fit: contain;
  }
`;

const AnnouncementContent = styled.div``;

const NameTime = styled.h4`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  line-height: 1.375rem;
  min-height: 1.375rem;
  margin-bottom: 1.4rem;
`;

const Name = styled.p`
  font-size: 1.6rem;
  font-weight: 600;
`;

const ShowDate = styled.p`
  font-size: 1.2rem;
  color: rgb(148, 155, 164);
`;

const AnnouncementDesc = styled.p`
  font-size: 1.4rem;
  margin-bottom: 1.6rem;
`;

const CourseName = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-brand-400);
  text-decoration: underline;
  text-underline-offset: 4px;
`;

const Category = styled.span`
  position: absolute;
  top: 6px;
  right: 6px;
  display: inline-block;
  width: fit-content;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.4rem 1.2rem;
  border-radius: 100px;

  ${({ category }) =>
    category === "exam" &&
    css`
      background-color: var(--color-red-700);
      color: #fff;
    `}

  ${({ category }) =>
    category === "event" &&
    css`
      background-color: #166534;
      color: #fff;
    `}

  ${({ category }) =>
    category === "general" &&
    css`
      background-color: var(--color-brand-400);
      color: #fff;
    `}
`;

const Announcement = ({ announcement }) => {
  const { author, createdAt, content, category, course } = announcement;
  const { name, avatar, gender } = author;
  const { title } = course;

  return (
    <AnnouncementComp>
      <Figure>
        <img src={`${BE_URL_Img}/users/${avatar}`} alt="this is image" />
      </Figure>

      <Category category={category.toLowerCase()}>{category}</Category>

      <AnnouncementContent>
        <NameTime>
          <Name>
            {gender === "male" ? "MR: " : "MS: "} {name}
          </Name>
          <ShowDate>{formatDate(createdAt)}</ShowDate>
        </NameTime>

        <AnnouncementDesc>
          {content}
          {content}
        </AnnouncementDesc>

        <CourseName>
          <Link to="">{title}</Link>
        </CourseName>
      </AnnouncementContent>
    </AnnouncementComp>
  );
};

export default Announcement;
