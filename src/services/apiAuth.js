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

export const getUser = async (token) => {
  if (!token) return null;

  const url = `${BE_URL}/user/me`;

  try {
    const res = await axios({
      url,
      headers: { authorization: `Bearer ${token}` },
      method: "GET",
    });

    return res.data;
  } catch (err) {
    throw new Error(err.response?.data?.message || err.message);
  }
};

export const getLogout = async () => {
  const url = `${BE_URL}/user/logout`;

  try {
    const res = await axios({
      url,
      method: "GET",
    });

    const data = res.data;

    return data;
  } catch (err) {
    throw new Error(err.response?.data?.message || err.message);
  }
};

export const updatePassword = async (data, token) => {
  const url = `${BE_URL}/user/updatePassword`;

  try {
    const res = await axios({
      url,
      data,
      method: "PATCH",
      headers: { authorization: `Bearer ${token}` },
    });

    localStorage.setItem("user-info", JSON.stringify(res.data));
    return res.data;
  } catch (err) {
    throw new Error(err.response?.data?.message || err.message);
  }
};
