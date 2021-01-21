import axios from "axios";

const baseUrl = `https://sugarbit.herokuapp.com/api`;

export const sentData = async (obj) => {
  try {
    const resp = await axios.post(baseUrl, obj);
    return resp.data 
} catch (err) {
    // Handle Error Here
    return console.error(err);
}
};
