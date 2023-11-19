import { Link } from "react-router-dom";
import { CardTitle, FormCard, StyledScreen } from "../ui/FormCard";
import Heading from "../ui/Heading";
import RegisterForm from "../features/authentication/RegisterForm";

const Register = () => {
  return (
    <StyledScreen>
      <FormCard>
        <CardTitle>
          <Heading>Create a new user</Heading>
          <span>
            Already have an account? <Link to="/login">Sign In</Link>
          </span>
        </CardTitle>

        <RegisterForm />
      </FormCard>
    </StyledScreen>
  );
};

export default Register;
