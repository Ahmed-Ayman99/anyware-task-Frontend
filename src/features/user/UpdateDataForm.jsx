import { useForm } from "react-hook-form";

import useUpdateUserData from "./useUpdateUserData";
import ButtonsGroup from "../../ui/ButtonsGroup";
import useUser from "../authentication/useUser";
import FileInput from "../../ui/FileInput";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";
import Input from "../../ui/Input";

function UpdateDataForm() {
  const { user } = useUser();
  const { register, formState, reset, handleSubmit } = useForm({
    defaultValues: user,
  });
  const { errors } = formState;

  const { updateUser, isUpdateUser } = useUpdateUserData();

  const onSubmit = (data) => {
    const formData = new FormData();
    const avatar =
      typeof data.avatar === "string" ? data.avatar : data.avatar[0];

    formData.append("avatar", avatar);
    formData.append("name", data.name);
    formData.append("email", data.email);

    updateUser(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="User Email" error={errors?.email?.message}>
        <Input
          type="email"
          placeholder="ahmed@gmail.com"
          disabled={true}
          id="email"
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide valid email",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="UserName"
        error={
          errors?.name ? errors?.name?.message || "Max length exceeded 8" : ""
        }
      >
        <Input
          type="text"
          id="username"
          placeholder="UserName"
          disabled={isUpdateUser}
          {...register("name", {
            required: "This field is required",
            minLength: 8 || "Errors",
          })}
        />
      </FormRow>

      <FormRow label="User Avatar">
        <FileInput
          disabled={isUpdateUser}
          id="avatar"
          type="file"
          accept="image/*"
          {...register("avatar")}
        />
      </FormRow>

      <ButtonsGroup>
        <Button variation="fill" disabled={isUpdateUser}>
          Update
        </Button>
        <Button type="reset" onClick={reset} disabled={isUpdateUser}>
          Clear
        </Button>
      </ButtonsGroup>
    </form>
  );
}

export default UpdateDataForm;
