import { getNodeText } from "@testing-library/react";
import tokenService from "../services/tokenService";
const BASE_URL = "/api/users/";

function getAllUsers() {
  return fetch(
    BASE_URL,
    {
      headers: { Authorization: "Bearer " + tokenService.getToken() },
    },
    { mode: "cors" }
  ).then((res) => res.json());
}

function getOne(id) {
  return fetch(
    `${BASE_URL}${id}`,
    {
      headers: { Authorization: "Bearer " + tokenService.getToken() },
    },
    { mode: "cors" }
  ).then((res) => res.json());
}

export default {
  getAllUsers,
  getOne
}