import {api} from "./ApiClient";

export const dataFromDummyEndpoint =
  (username, token) => api.get(`/hello-world/path-variable/${username}`, {
    headers: {
      Authorization: token
    }
  });

