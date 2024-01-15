import axios from "axios"

const api = axios.create({
  baseURL: 'http://localhost:8080'
})

export const dataFromDummyEndpoint = (username) => api.get(`/hello-world/path-variable/${username}`);
