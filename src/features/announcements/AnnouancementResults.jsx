import styled from "styled-components";

import useAnnouncement from "./useAnnouncement";
import Announcement from "./Announcement";
import Spinner from "../../ui/Spinner";
import Heading from "../../ui/Heading";

const CoursesContainer = styled.section`
  padding: 2rem 5.2rem;
`;

const AnnouancementLists = styled.div`
  padding: 0rem 3.2rem;
`;

const AnnouancementResults = () => {
  const { isLoading, announcements } = useAnnouncement();

  return (
    <CoursesContainer>
      <Heading as="h3">My Annouancements</Heading>

      <AnnouancementLists>
        {isLoading && <Spinner />}

        {announcements &&
          announcements.map((announcement, ind) => (
            <Announcement key={ind} announcement={announcement} />
          ))}
      </AnnouancementLists>
    </CoursesContainer>
  );
};

export default AnnouancementResults;
