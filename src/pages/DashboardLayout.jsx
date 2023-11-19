import { Outlet } from "react-router-dom";
import styled from "styled-components";

import ProtectedRoute from "../features/authentication/ProtectedRoute";
import Sidebar from "../ui/SideBar";

const DashboardStyles = styled.main`
  height: 100vh;
  display: grid;
  grid-template-columns: 20rem 1fr;
`;

const MainSectionStyle = styled.section`
  min-height: 100vh;
  overflow-y: auto;
  background-color: #f1f5f9;

  &::-webkit-scrollbar {
    width: 1rem;
  }

  &::-webkit-scrollbar-track {
    background: var(--color-brand-50);
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-brand-400);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--color-brand-50);
  }
`;

const DashboardLayout = () => {
  return (
    <ProtectedRoute>
      <DashboardStyles>
        <Sidebar />

        <MainSectionStyle>
          <Outlet />
        </MainSectionStyle>
      </DashboardStyles>
    </ProtectedRoute>
  );
};

export default DashboardLayout;
