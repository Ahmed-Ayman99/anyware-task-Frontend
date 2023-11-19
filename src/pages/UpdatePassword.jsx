import UpdatePasswordForm from "../features/user/UpdatePasswordForm";
import Heading from "../ui/Heading";
import MainHeader from "../ui/MainHeader";
import { UpdateDataStyles } from "../ui/UpdateDataStyles";

const UpdatePassword = () => {
  return (
    <>
      <MainHeader />

      <UpdateDataStyles>
        <Heading as="h3">Update Your Data</Heading>

        <UpdatePasswordForm />
      </UpdateDataStyles>
    </>
  );
};

export default UpdatePassword;
