import axios from "axios";

export const api = {
  dog: async function () {
    return axios.get("https://dog.ceo/api/breeds/image/random");
  },
};
