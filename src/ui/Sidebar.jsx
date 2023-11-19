import styled from "styled-components";
import { FaHome, FaRegCalendarAlt, FaBook, FaBullhorn } from "react-icons/fa";
import { FaGraduationCap, FaChartLine } from "react-icons/fa6";

import Heading from "./Heading";
import SidebarListItem from "./SidebarListItem";

const SidebarStyle = styled.aside`
  width: 100%;
  height: 100vh;
  padding: 3rem 0px;
  background-image: linear-gradient(to right bottom, #0a9595, #054a4a);
`;

const Sidebar = () => {
  return (
    <SidebarStyle>
      <Heading as="h2">Coligo</Heading>
      <ul>
        <SidebarListItem to="/" label="Dashboard">
          <FaHome />
        </SidebarListItem>

        <SidebarListItem to="/courses" label="Courses">
          <FaBook />
        </SidebarListItem>

        <SidebarListItem to="UpdateData" label="UpdateData">
          <FaRegCalendarAlt />
        </SidebarListItem>

        <SidebarListItem to="UpdatePassword" label="UpdatePassword">
          <FaGraduationCap />
        </SidebarListItem>

        <SidebarListItem to="announcements" label="Announcement">
          <FaBullhorn />
        </SidebarListItem>

        <SidebarListItem label="Performance">
          <FaChartLine />
        </SidebarListItem>
      </ul>
    </SidebarStyle>
  );
};

export default Sidebar;
