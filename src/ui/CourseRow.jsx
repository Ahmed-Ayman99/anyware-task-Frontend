import styled from "styled-components";
import { FaStar, FaRegStar } from "react-icons/fa";
import { BE_URL_Img } from "../utils/constants";

const RowCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  background-color: #fff;
  gap: 1rem;
  overflow: hidden;
  padding-bottom: 1.6rem;
  border-bottom: 1px solid #d1d7dc;

  padding: 1rem 1.2rem;
  &:not(:first-child) {
    padding-top: 1.6rem;
  }
`;

const Figure = styled.figure`
  display: flex;
  align-items: center;
  & img {
    height: 6rem;
    width: 6rem;
    border-radius: 50%;
  }
`;

const CourseHeader = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const CourseAuthor = styled.p`
  font-weight: 400;
  line-height: 1.4;
  font-size: 1rem;
  color: #2d2f31;
  margin-bottom: 0.4rem;
`;

const CardRating = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;

  & span:nth-child(1) {
    color: #4d3105;
    font-weight: 600;
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

function CourseRow({ course }) {
  const { title, coverImage, ratingsAverage, ratingsQuantity, instructor } =
    course;

  return (
    <RowCard>
      <Figure>
        <img src={`${BE_URL_Img}/courses/${coverImage}`} />
      </Figure>

      <CourseDetials>
        <CourseHeader>{title}</CourseHeader>
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
    </RowCard>
  );
}

export default CourseRow;
