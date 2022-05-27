import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'X-RapidAPI-Host': `${process.env.REACT_APP_API_HOST}`,
    'X-RapidAPI-Key': `${process.env.REACT_APP_API_KEY}`
  }
});

export default instance