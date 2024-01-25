import {api} from "./ApiClient";

export const executeBasicAuthDummyEndpoint =
  (token) => api.get(`/dummy`, {
    headers: {
      Authorization: token
    }
  });
