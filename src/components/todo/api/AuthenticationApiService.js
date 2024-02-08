import {api} from "./ApiClient";

export const executeJwtAuthenticationService =
  (username, password) =>
    api.post(`/authenticate`, {username, password});