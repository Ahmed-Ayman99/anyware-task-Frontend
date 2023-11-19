import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { updatePassword } from "../../services/apiAuth";
import useUser from "../authentication/useUser";

const useUpdatePassword = () => {
  const { token } = useUser();

  const { mutate: updateUserPassword, isLoading: isUpdateUserPassword } =
    useMutation({
      mutationFn: (data) => updatePassword(data, token),
      onSuccess: () => {
        toast.success("Your password is updated");
      },
    });

  return { updateUserPassword, isUpdateUserPassword };
};

export default useUpdatePassword;
