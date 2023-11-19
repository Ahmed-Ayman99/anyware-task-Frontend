import axios from "axios";
import { BE_URL } from "../utils/constants";

export const getAnnouncement = async (token) => {
  const url = `${BE_URL}/announcement`;

  try {
    const res = await axios({
      url,
      headers: { authorization: `Bearer ${token}` },
      method: "GET",
    });

    return res.data.data;
  } catch (err) {
    throw new Error(err.response?.data?.message || err.message);
  }
};
