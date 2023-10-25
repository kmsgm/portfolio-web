import axios from "axios";

// export const API_ENDPOINT = "http://127.0.0.1:8000";
export const API_ENDPOINT =
  "https://minseo-portfolio-4f6b9f454d74.herokuapp.com";
// export const API_ENDPOINT = "http://3.39.23.121";

const instance = axios.create({
  baseURL: API_ENDPOINT,
  headers: {
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
  },
});

export const api = {
  getHomeData: async () => {
    const response = await instance.get("/api/home/");
    return response.data;
  },

  getAboutData: async () => {
    const response = await instance.get("/api/about/");
    return response.data;
  },

  getProjectsData: async () => {
    const response = await instance.get("/api/projects/");
    return response.data;
  },

  getFilteredProjectsData: async (category: string) => {
    const response = await instance.get(`/api/projects/${category}/`);
    return response.data;
  },
};
