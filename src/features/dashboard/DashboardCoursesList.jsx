import styled from "styled-components";
import { Link } from "react-router-dom";

import useCourses from "../courses/useCourses";
import CourseRow from "../../ui/CourseRow";
import Spinner from "../../ui/Spinner";
import Heading from "../../ui/Heading";

const CoursesContainer = styled.div``;

const CoursesLists = styled.ul`
  padding: 0rem 3.2rem;
`;

function DashboardCoursesList() {
  const { isLoading, courses } = useCourses();

  return (
    <CoursesContainer>
      <Heading as="h4">
        <Link to="courses">All</Link>
      </Heading>

      <CoursesLists>
        {isLoading && <Spinner />}

        {courses &&
          courses.map((course, ind) => (
            <Link key={ind}>
              <CourseRow course={course} />
            </Link>
          ))}
      </CoursesLists>
    </CoursesContainer>
  );
}

export default DashboardCoursesList;
