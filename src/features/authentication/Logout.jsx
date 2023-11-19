import { HiArrowRightOnRectangle } from "react-icons/hi2";

import useLogout from "./useLogout";
import ButtonIcon from "../../ui/ButtonIcon";

const Logout = () => {
  const { logout, isLogout } = useLogout();
  const handleLogOut = () => logout();

  return (
    <ButtonIcon disabled={isLogout} onClick={handleLogOut}>
      <HiArrowRightOnRectangle />
    </ButtonIcon>
  );
};

export default Logout;
