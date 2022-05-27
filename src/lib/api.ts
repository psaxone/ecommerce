import axios from "axios";

const instance = axios.create({
  baseURL: 'https://nike-products.p.rapidapi.com/',
  headers: {
    'X-RapidAPI-Host': 'nike-products.p.rapidapi.com',
    'X-RapidAPI-Key': 'aa9acf9ebdmshd0b8205dc7acf18p154bc5jsne030bf90c3ca'
  }
});

export default instance