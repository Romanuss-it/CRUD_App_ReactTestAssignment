// import http from "../http-common";
import axios from "axios";

const API_URL = "http://localhost:8080/api";

const getAll = () => {
  return axios.get(API_URL + "/tutorials");
};

const get = id => {
  return axios.get(API_URL + `/tutorials/${id}`);
};

const create = data => {
  return axios.post(API_URL + "/tutorials", data);
};

const update = (id, data) => {
  return axios.put(API_URL + `/tutorials/${id}`, data);
};

const remove = id => {
  return axios.delete(API_URL + `/tutorials/${id}`);
};

const removeAll = () => {
  return axios.delete(API_URL + `/tutorials`);
};

const findByTitle = title => {
  return axios.get(API_URL + `/tutorials?title=${title}`);
};

const TutorialService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default TutorialService;