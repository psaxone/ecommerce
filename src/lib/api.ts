import axios from "axios";

const instance = axios.create({
  baseURL: 'https://nike-products.p.rapidapi.com/',
  headers: {
    'X-RapidAPI-Host': 'nike-products.p.rapidapi.com',
    'X-RapidAPI-Key': `${process.env.API_KEY}`
  }
});

export default instance