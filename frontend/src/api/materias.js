import axios from "axios";

export const createTaskRequest = async (task) => axios.post("/materia", task);

export const updateTaskRequest = async (task) =>
  axios.put(`/materia/${task._id}`, task);

export const deleteTaskRequest = async (id) => axios.delete(`/materia/${id}`);

export const getTaskRequest = async (id) => axios.get(`/materia/${id}`);