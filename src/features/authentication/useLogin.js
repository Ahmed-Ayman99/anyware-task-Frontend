import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { loginApi } from "../../services/apiAuth";

const useLogin = () => {
  const navigate = useNavigate();

  const { mutate: login, isLoading: isLogIn } = useMutation({
    mutationFn: loginApi,
    onSuccess: () => {
      toast.success("Welcome Back");
      navigate("/");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { login, isLogIn };
};

export default useLogin;
