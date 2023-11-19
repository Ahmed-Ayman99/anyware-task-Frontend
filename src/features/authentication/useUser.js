import { useQuery } from "@tanstack/react-query";

import { getUser } from "../../services/apiAuth";

const useUser = () => {
  const token = JSON.parse(localStorage.getItem("user-info"))?.token;

  const { data, isLoading } = useQuery({
    queryFn: () => getUser(token),
    queryKey: ["user", token],
  });

  return {
    isLoading,
    user: data?.data,
    token: data?.token,
    isAuthenticated: data?.data?.role === "student",
  };
};

export default useUser;
