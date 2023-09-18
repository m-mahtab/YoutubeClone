import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  method: 'GET',
  url: BASE_URL,
  params: {
    
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '3764ba9c8dmshbc68abca52a29e1p13315djsn2f7942507224',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};


  export const fetchFromapi = async (url) =>{

    const {data} = await axios.get(`${BASE_URL}${url}`, options);
     return data;
  }