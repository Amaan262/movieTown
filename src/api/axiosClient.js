import axios from "axios";
import queryString from "query-string";
import apiConfig from "./apiConfig";
const axiosClient = axios.create({
  baseURL: apiConfig.baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer: params => queryString.stringify({ ...params, api_key: apiConfig.apiKey })
  
});

axiosClient.interceptors.request.use(async (config) => config);

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    throw error;
  }
);
// export const getPublicAPI= (path, parms)=>{

//   const query = '?'+ new URLSearchParams(parms).toString()+'api_key='+"e2a93db6a841a2b19f9ee518f531c9ce"
//   const res= axios.get(`
//   https://api.themoviedb.org/3/movie/popular?api_key=e2a93db6a841a2b19f9ee518f531c9ce&language=en-US&page=1`)
// }

export default axiosClient;






