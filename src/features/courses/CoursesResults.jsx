import styled from "styled-components";
import { Link } from "react-router-dom";

import useCourses from "./useCourses";
import Spinner from "../../ui/Spinner";
import CourseItem from "./CourseItem";
import Heading from "../../ui/Heading";

const CoursesContainer = styled.section`
  padding: 2rem 5.2rem;
`;

const CoursesLists = styled.div`
  padding: 0rem 3.2rem;
`;

const CoursesResults = () => {
  const { isLoading, courses } = useCourses();

  return (
    <CoursesContainer>
      <Heading as="h3">All Courses</Heading>

      <CoursesLists>
        {isLoading && <Spinner />}

        {courses &&
          courses.map((course, ind) => (
            <Link key={ind}>
              <CourseItem course={course} />
            </Link>
          ))}
      </CoursesLists>
    </CoursesContainer>
  );
};

export default CoursesResults;
