import { createContext } from "react";

const NewsContext = createContext();

const NewsContextProvider = ({ children }) => {
  return <NewsContext>{children}</NewsContext>;
};

export default NewsContext;
