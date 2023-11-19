import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { getLogout } from "../../services/apiAuth";

const useLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: logout, isLoading: isLogout } = useMutation({
    mutationFn: getLogout,
    onSuccess: (data) => {
      localStorage.removeItem("user-info");
      navigate("/login", { replace: true });

      queryClient.removeQueries();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isLogout, logout };
};

export default useLogout;
