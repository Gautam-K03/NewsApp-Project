import { createContext, useState , useContext} from "react";
import axios from "axios";
import api from "../config/axiosInstance";

const NewsContext = createContext();

const NewsContextProvider = ({ children }) => {
  const [news, setNews] = useState([]);

  const fetchNews = async (url="/everything?q=india") => {
    try {
      const response = await api.get(
        `${url}&apiKey=${import.meta.env.VITE_API_KEY}`,
      );
      return response.data;
      // console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const value = {
    news,
    setNews,
    fetchNews,
  };

  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
};

const useNewsContext = () => {
  return useContext(NewsContext);
};

export { NewsContextProvider, useNewsContext };
