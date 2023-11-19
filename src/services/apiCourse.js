import axios from "axios";

import { BE_URL } from "../utils/constants";

export const getCoursesApi = async (token) => {
  const url = `${BE_URL}/course`;
  try {
    const res = await axios({
      url,
      method: "GET",
      headers: { authorization: `Bearer ${token}` },
    });

    return res.data.data;
  } catch (err) {
    throw new Error(err.response?.data?.message || err.message);
  }
};
