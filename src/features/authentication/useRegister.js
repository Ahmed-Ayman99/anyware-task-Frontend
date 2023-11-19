import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { registerApi } from "../../services/apiAuth";

function useRegister() {
  const navigat = useNavigate();

  const { mutate: register, isLoading: isRegister } = useMutation({
    mutationFn: registerApi,
    onSuccess: () => {
      toast.success("You are Sign up");
      navigat("/");
    },
  });

  return { register, isRegister };
}

export default useRegister;
