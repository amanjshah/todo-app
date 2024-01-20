import {api} from "./ApiClient";

export const dataFromDummyEndpoint = (username) => api.get(`/hello-world/path-variable/${username}`);
