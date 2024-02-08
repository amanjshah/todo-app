import {api} from "./ApiClient";

export const executeUserRegistrationService =
  (username, password) =>
    api.post(`/register`, {username, password});