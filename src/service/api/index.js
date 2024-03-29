import axios from "axios";

export const BASE_URL = "https://localhost:7244/";

export const ENDPOINTS = {
  // ACCOUNT
  register: "account/register",
  login: "account/login",
  active_account: "account/active-account",
  forgot_pass: "account/forgot-pass",
  retrieve_pass: "account/retrieve-pass",

  // USER PANEL
  user_info: "userPanel/user-info",
  user_edit: "userPanel/user-edit",
  user_pass: "userPanel/user-pass",
};

export const createAPIEndpoint = (endpoint) => {
  let url = BASE_URL + "api/" + endpoint + "/";

  return {
    fetch: () => axios.get(url),
    fetchById: (id) => axios.get(url + id),
    post: (newRecord) => axios.post(url, newRecord),
    put: (id, updateRecord) => axios.put(url + id, updateRecord),
    delete: (id) => axios.delete(url + id),
  };
};
