import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import Spinner from "../../ui/Spinner";
import useUser from "./useUser";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useUser();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login");
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading) return <Spinner />;
  if (!isLoading && isAuthenticated) return children;
};

export default ProtectedRoute;
