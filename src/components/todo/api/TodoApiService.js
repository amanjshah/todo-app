import axios from "axios"

const api = axios.create({
  baseURL: 'http://localhost:8080'
})

export const getTodoListForUser = (username) => api.get(`/users/${username}/todos`);
