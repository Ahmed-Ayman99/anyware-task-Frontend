import { useQuery } from "@tanstack/react-query";

import { getAnnouncement } from "../../services/apiAnnouncement";
import useUser from "../authentication/useUser";

const useAnnouncement = () => {
  const { token } = useUser();

  const {
    data: announcements,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["announcement", token],
    queryFn: () => getAnnouncement(token),
  });

  return { announcements, isLoading, error };
};

export default useAnnouncement;
