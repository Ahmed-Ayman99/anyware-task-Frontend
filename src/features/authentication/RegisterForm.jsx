import { useForm } from "react-hook-form";

import ButtonsGroup from "../../ui/ButtonsGroup";
import FileInput from "../../ui/FileInput";
import useRegister from "./useRegister";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";
import Input from "../../ui/Input";

const RegisterForm = () => {
  const { register, handleSubmit, getValues, formState, reset } = useForm();
  const { errors } = formState;

  const { register: signUp, isRegister } = useRegister();

  const onSubmit = (data) => {
    const formData = new FormData();

    const avatar =
      typeof data.avatar === "string" ? data.avatar : data.avatar[0];

    formData.append("avatar", avatar);
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("passwordConfirm", data.passwordConfirm);

    signUp(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
          disabled={isRegister}
          {...register("name", {
            required: "This field is required",
            minLength: 8 || "Errors",
          })}
        />
      </FormRow>

      <FormRow label="User Email" error={errors?.email?.message}>
        <Input
          type="email"
          placeholder="ahmed@gmail.com"
          id="email"
          disabled={isRegister}
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide valid email",
            },
          })}
        />
      </FormRow>

      <FormRow label="Password" error={errors?.password?.message}>
        <Input
          type="password"
          placeholder="Password"
          id="password"
          disabled={isRegister}
          {...register("password", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow
        label="Password Confirm"
        error={errors?.passwordConfirm?.message}
      >
        <Input
          disabled={isRegister}
          type="password"
          placeholder="passwordConfirm"
          id="passwordConfirm"
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              value === getValues().password || "Password needs to match",
          })}
        />
      </FormRow>

      <FormRow label="User Avatar">
        <FileInput
          disabled={isRegister}
          id="avatar"
          type="file"
          accept="image/*"
          {...register("avatar")}
        />
      </FormRow>

      <ButtonsGroup>
        <Button variation="fill" disabled={isRegister}>
          Sign Up
        </Button>
        <Button type="reset" onClick={reset} disabled={isRegister}>
          Clear
        </Button>
      </ButtonsGroup>
    </form>
  );
};

export default RegisterForm;
