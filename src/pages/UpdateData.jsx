import Heading from "../ui/Heading";
import MainHeader from "../ui/MainHeader";
import UpdateDataForm from "../features/user/UpdateDataForm";
import { UpdateDataStyles } from "../ui/UpdateDataStyles";

const UpdateData = () => {
  return (
    <>
      <MainHeader />

      <UpdateDataStyles>
        <Heading as="h3">Update Your Data</Heading>

        <UpdateDataForm />
      </UpdateDataStyles>
    </>
  );
};

export default UpdateData;
