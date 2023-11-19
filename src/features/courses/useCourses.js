import { useQuery } from "@tanstack/react-query";
import useUser from "../authentication/useUser";

import { getCoursesApi } from "../../services/apiCourse";

const useCourses = () => {
  const { token } = useUser();

  const { isLoading, data: courses } = useQuery({
    queryKey: ["courses", token],
    queryFn: () => getCoursesApi(token),
  });

  return { isLoading, courses };
};

export default useCourses;
