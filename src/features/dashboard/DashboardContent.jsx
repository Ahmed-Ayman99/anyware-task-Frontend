import styled from "styled-components";
import { Link } from "react-router-dom";

import useAnnouncement from "../announcements/useAnnouncement";
import DashboardCoursesList from "./DashboardCoursesList";
import Announcement from "../announcements/Announcement";
import Heading from "../../ui/Heading";
import Spinner from "../../ui/Spinner";

const ContentConteiner = styled.section`
  display: grid;
  gap: 2rem;
  padding: 2rem;
  grid-template-columns: 3fr 1fr;
`;

const ExamSection = styled.section`
  grid-template-columns: 1fr 1fr;
  background-color: #fff;
  grid-column: span 2;
  display: grid;
  gap: 4.8rem;
`;

const ExamsContent = styled.section`
  padding: 3rem 3.2rem;
`;

const ExamMainText = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  margin-bottom: 1.6rem;
`;

const ExamSubText = styled.p`
  line-height: 1.6;
  margin-bottom: 4.8rem;
  color: #767676;
`;

const Button = styled.button`
  background-color: #0cbaba;
  color: white;
  text-transform: capitalize;
  border-radius: 0.3125rem;
  transition: 0.3s ease;
  font-weight: bold;
  border: 2px solid #0cbaba;
  padding: 0.8rem 2rem;

  &:hover {
    background-color: transparent;
    color: #0cbaba;
  }
`;

const AnnouncementsStyles = styled.div``;

const DashboardContent = () => {
  const { announcements, isLoading } = useAnnouncement();

  return (
    <ContentConteiner>
      <ExamSection>
        <ExamsContent>
          <Heading as="h3">Exams Time</Heading>

          <ExamMainText>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
            neque est pariatur fuga delectus? Incidunt, laborum, exercitationem
            nisi quas, iste atque cum consectetur consequatur quod rerum non
            laudantium eum dolor.
          </ExamMainText>

          <ExamSubText>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
            neque est pariatur fuga delectus?
          </ExamSubText>

          <Button>View Exams Tips</Button>
        </ExamsContent>

        <figure>
          <img
            src="/undraw_personal_notebook_re_d7dc.d0fb41f4ea296a924bcd6aec8fdda2d5.svg"
            alt="Exam main image"
          />
        </figure>
      </ExamSection>

      <AnnouncementsStyles>
        <Heading as="h4">
          <Link to="announcements">All</Link>
        </Heading>

        {isLoading && <Spinner />}
        {!announcements?.length && <p>There is no announcements</p>}

        {announcements?.map((announcement, ind) => (
          <Announcement announcement={announcement} key={ind} />
        ))}
      </AnnouncementsStyles>

      <DashboardCoursesList />
    </ContentConteiner>
  );
};

export default DashboardContent;
