import axios from "axios";

const request = async ({ url, method = "GET", body, headers } = {}) => {
  axios.defaults.baseURL = 'https://api.thecatapi.com/v1/';

  const defaultHeaders = {
    'Content-Type': 'application/json',
    'x-api-key': 'live_Zux1vwGvWHPZWWCWEOYFXHWB9oVFVkXo2qhqZJytBOB0ewD2ZYpMjsYWZHfgsVaX'
  };

  const fetchData = () => {
    if (method === "GET") {
      return axios.get(url, {
        headers: { ...defaultHeaders, ...headers }, 
        params: body 
      });
    } else {
      return axios({ url, method, headers: { ...defaultHeaders, ...headers }, data: body });
    }
  };

  try {
    const { data, status } = await fetchData();
    return { res: data, status };
  } catch ({ response }) {
    return { err: response };
  }
};

export default request;
