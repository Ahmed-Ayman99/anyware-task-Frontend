import axios from "axios";
import { BE_URL } from "../utils/constants";

export const registerApi = async (userData) => {
  const url = `${BE_URL}/user/register`;

  try {
    const res = await axios({
      url,
      method: "POST",
      data: userData,
    });

    const data = res.data;
    localStorage.setItem("user-info", JSON.stringify(data));

    return data;
  } catch (err) {
    throw new Error(err.response?.data?.message || err.message);
  }
};

export const loginApi = async (newData) => {
  const url = `${BE_URL}/user/login`;

  try {
    const res = await axios({
      url,
      data: newData,
      method: "POST",
      credentials: "include",
    });

    const data = res.data;
    localStorage.setItem("user-info", JSON.stringify(data));

    return data;
  } catch (err) {
    throw new Error(err.response?.data?.message || err.message);
  }
};

export const updateDataUser = async (data, token) => {
  const url = `${BE_URL}/user/updateMe`;

  try {
    const res = await axios({
      url,
      method: "PATCH",
      data,
      headers: { authorization: `Bearer ${token}` },
    });

    return res.data.user;
  } catch (err) {
    throw new Error(err.response?.data?.message || err.message);
  }
};
