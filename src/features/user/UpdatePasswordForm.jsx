import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import useUpdatePassword from "./useUpdatePassword";
import ButtonsGroup from "../../ui/ButtonsGroup";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";
import Input from "../../ui/Input";

const UpdatePasswordForm = () => {
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;
  const navigate = useNavigate();

  const { updateUserPassword, isUpdateUserPassword } = useUpdatePassword();

  const onSubmit = (data) => {
    updateUserPassword(data, {
      onSuccess: () => {
        reset();
        navigate("/");
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormRow
        label="Password (min 8 characters)"
        error={errors?.password?.message}
      >
        <Input
          disabled={isUpdateUserPassword}
          type="password"
          id="currentPassword"
          autoComplete="currentPassword"
          {...register("currentPassword", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Password (min 8 characters)"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          disabled={isUpdateUserPassword}
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Confirm password"
        error={errors?.passwordConfirm?.message}
      >
        <Input
          type="password"
          autoComplete="new-password"
          id="passwordConfirm"
          disabled={isUpdateUserPassword}
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              getValues().password === value || "Passwords need to match",
          })}
        />
      </FormRow>
      <FormRow>
        <ButtonsGroup>
          <Button variation="fill" disabled={isUpdateUserPassword}>
            Update
          </Button>
          <Button type="reset" onClick={reset} disabled={isUpdateUserPassword}>
            Clear
          </Button>
        </ButtonsGroup>
      </FormRow>
    </form>
  );
};
export default UpdatePasswordForm;
