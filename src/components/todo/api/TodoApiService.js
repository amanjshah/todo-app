import {api} from "./ApiClient";

export const getTodoListForUser = (username) => api.get(`/users/${username}/todos`)
export const deleteTodo = (username, id) => api.delete(`/users/${username}/todos/${id}`)
export const getTodo = (username, id) => api.get(`/users/${username}/todos/${id}`)
export const addTodo = (username, todo) => api.post(`/users/${username}/todos`, todo)
export const updateTodo = (username, id, todo) => api.put(`/users/${username}/todos/${id}`, todo)