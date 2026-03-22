import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  return axios
    .get(baseUrl)
    .then((response) => response.data)
    .catch((error) => alert("error occurred getting data"));
};

const addPerson = (enteredName) => {
  return axios
    .post(baseUrl, enteredName)
    .then((response) => response.data)
    .catch((error) => alert("error occurred posting data"));
};

const deletePerson = (id) => {
  return axios.delete(`${baseUrl}/${id}`).then((response) => response.data);
};

const replaceNumber = ({ id, enteredName }) => {
  return axios
    .put(`${baseUrl}/${id}`, enteredName)
    .then((response) => response.data)
    .catch((error) => alert("error occurred deleting data"));
};

export default { getAll, addPerson, deletePerson, replaceNumber };
