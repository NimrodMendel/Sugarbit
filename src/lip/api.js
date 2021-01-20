import axios from "axios";

const baseUrl = `http://localhost:5000`;

export const sentData = async (obj) => {
  let result;
  await axios
    .post(`${baseUrl}/`, obj)
    .then(function (response) {
      result = response.data;
      return result;
    })
    .catch(function (error) {
      console.error(error);
    });
  return result;
};
