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

function updateUserInfo(userData){
  return fetch(`${BASE_URL}`,{
      method: 'PUT',
      headers: {'content-type': 'application/json','Authorization': 'Bearer ' + tokenService.getToken()},
      body: JSON.stringify(userData)
  }, {mode: "cors"})
  .then(res => res.json())
}

function addFavState(id, state){
  return fetch (`${BASE_URL}${id}/${state}`, {
    method: "POST",
    headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
    
  }, {mode: "cors"})
  .then(res => res.json())
}

export default {
  getAllUsers,
  getOne,
  updateUserInfo,
  addFavState
}