import {api} from "./ApiClient";

export const dataFromDummyEndpoint =
  (username) => api.get(`/hello-world/path-variable/${username}`, {
    headers: {
      Authorization: 'Basic YW1hbjpkdW1teQ=='
    }
  });

export const executeBasicAuthDummyEndpoint =
  (token) => api.get(`/dummy`, {
    headers: {
      Authorization: token
    }
  });
