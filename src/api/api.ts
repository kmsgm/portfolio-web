import axios from "axios";

export const API_ENDPOINT = "https://minseo-portfolio.shop";

const instance = axios.create({
  baseURL: API_ENDPOINT,
  // headers: {
  //   "Access-Control-Allow-Origin": "*",
  // },
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
