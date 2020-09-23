import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "fdbd35f117fcb9a07f0cffe0a1b54c3e",
    language: "en-US",
  },
});

export const tvApi = {};

export const moviesApi = {};
