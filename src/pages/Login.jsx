import { Link } from "react-router-dom";

import { FormCard, CardTitle, StyledScreen } from "../ui/FormCard";
import LoginForm from "../features/authentication/LoginForm";
import Heading from "../ui/Heading";

const Login = () => {
  return (
    <StyledScreen>
      <FormCard>
        <CardTitle>
          <Heading>Sign in</Heading>
          <span>
            Don&lsquo;t have an account? <Link to="/register">Sign Up</Link>
          </span>
        </CardTitle>

        <LoginForm />
      </FormCard>
    </StyledScreen>
  );
};

export default Login;
