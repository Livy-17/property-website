import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const options = {
    headers: {
      'X-RapidAPI-Key': 'ce593eee28mshc95616570c30664p165694jsn509b23999d5a',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    }
  };
  const { data } = await axios.get(url, options);
  return data;
};
