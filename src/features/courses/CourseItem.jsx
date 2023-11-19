import { FaStar, FaRegStar } from "react-icons/fa";
import styled from "styled-components";

import { BE_URL_Img } from "../../utils/constants";

const CourseCard = styled.div`
  display: grid;
  grid-template-columns: 24rem 1fr;
  grid-template-rows: 16rem;
  background-color: #fff;
  gap: 1.6rem;
  overflow: hidden;
  padding-bottom: 1.6rem;
  border-bottom: 1px solid #d1d7dc;

  &:not(:first-child) {
    padding-top: 1.6rem;
  }
`;

const Figure = styled.figure`
  & img {
    height: 100%;
    width: 100%;
  }
`;

const CourseHeader = styled.h4`
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const CourseDescription = styled.p`
  color: #2d2f31;
  font-weight: 400;
  line-height: 1.4;
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
`;

const CourseAuthor = styled.p`
  font-weight: 400;
  line-height: 1.4;
  font-size: 1.2rem;
  color: #2d2f31;
  margin-bottom: 0.4rem;
`;

const CardRating = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  & span:nth-child(1) {
    color: #4d3105;
    font-weight: 700;
    font-size: 1.4rem;
  }

  & span:nth-child(2) {
    display: flex;
    align-items: center;
    & svg {
      font-size: 1.4rem;

      color: #ef8e70;
    }
  }

  & span:nth-child(3) {
    color: #6a6f73;
    font-weight: 400;
    font-size: 1.2rem;
  }
`;

const CourseDetials = styled.div``;

function CourseItem({ course }) {
  const {
    title,
    description,
    coverImage,
    ratingsAverage,
    ratingsQuantity,
    instructor,
  } = course;

  return (
    <CourseCard>
      <Figure>
        <img src={`${BE_URL_Img}/courses/${coverImage}`} />
      </Figure>

      <CourseDetials>
        <CourseHeader>{title}</CourseHeader>
        <CourseDescription>{description}</CourseDescription>
        <CourseAuthor>{instructor.name}</CourseAuthor>

        <CardRating>
          <span>{ratingsAverage}</span>
          <span>
            {Array.from({ length: 5 }).map((_, ind) =>
              ind + 1 <= Math.floor(ratingsAverage) ? (
                <FaStar key={ind} />
              ) : (
                <FaRegStar key={ind} />
              )
            )}
          </span>

          <span>({ratingsQuantity})</span>
        </CardRating>
      </CourseDetials>
    </CourseCard>
  );
}

export default CourseItem;
