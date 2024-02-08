import {api} from "./ApiClient";

export const executeJwtAuthenticationService =
  (username, password) =>
    api.post(`/authenticate`, {username, password});

export const executeUserRegistrationService =
  (username, password) =>
    api.post(`/register`, {username, password});