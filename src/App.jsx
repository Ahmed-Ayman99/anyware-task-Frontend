import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import AnnouncementsLayout from "./features/announcements/AnnouncementsLayout";
import Dashboard from "./features/dashboard/Dashboard";
import DashboardLayout from "./pages/DashboardLayout";
import UpdatePassword from "./pages/UpdatePassword";
import Courses from "./features/courses/Courses";
import GlobalStyles from "./styles/GlobalStyles";
import UpdateData from "./pages/UpdateData";
import ToasterItem from "./ui/ToasterItem";
import Register from "./pages/Register";
import Login from "./pages/Login";

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { staleTime: 0 },
    },
  });

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />

          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="/" element={<DashboardLayout />}>
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="courses" element={<Courses />} />
              <Route path="announcements" element={<AnnouncementsLayout />} />
              <Route path="UpdateData" element={<UpdateData />} />
              <Route path="UpdatePassword" element={<UpdatePassword />} />
            </Route>
          </Routes>
        </QueryClientProvider>
      </BrowserRouter>

      <ToasterItem />
    </>
  );
};

export default App;
