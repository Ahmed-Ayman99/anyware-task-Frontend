import { useForm } from "react-hook-form";

import ButtonsGroup from "../../ui/ButtonsGroup";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import useLogin from "./useLogin";

const LoginForm = () => {
  const { register, handleSubmit, formState, reset } = useForm({
    defaultValues: {
      email: "ahmed.montaser@example.com",
      password: "pass1234",
    },
  });
  const { errors } = formState;

  const { login, isLogIn } = useLogin();

  const onSubmit = (data) => login(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="User Email" error={errors?.email?.message}>
        <Input
          disabled={isLogIn}
          type="email"
          placeholder="ahmed@gmail.com"
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

      <FormRow label="Password" error={errors?.password?.message}>
        <Input
          disabled={isLogIn}
          type="password"
          placeholder="Password"
          id="password"
          {...register("password", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <ButtonsGroup>
        <Button variation="fill" disabled={isLogIn}>
          Login
        </Button>

        <Button type="reset" onClick={reset} disabled={isLogIn}>
          Clear
        </Button>
      </ButtonsGroup>
    </form>
  );
};

export default LoginForm;
