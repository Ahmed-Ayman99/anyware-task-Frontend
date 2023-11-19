import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { updateDataUser } from "../../services/apiUser";
import useUser from "../authentication/useUser";

const useUpdateUserData = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { token } = useUser();

  const { mutate: updateUser, isLoading: isUpdateUser } = useMutation({
    mutationFn: (data) => updateDataUser(data, token),
    onSuccess: (data) => {
      localStorage.setItem(
        "user",
        JSON.stringify({
          ...JSON.parse(localStorage.getItem("user-info")),
          user: data,
        })
      );

      navigate("/");
      queryClient.invalidateQueries({ active: true });
      toast.success("Your data is updated");
    },
  });

  return { updateUser, isUpdateUser };
};

export default useUpdateUserData;
