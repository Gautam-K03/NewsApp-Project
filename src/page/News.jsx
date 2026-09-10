import React from "react";
import { useEffect } from "react";
import axios from "axios";
// import api from "../config/axiosInstance";
import { useNewsContext } from "../context/NewsContext";

const News = () => {

  const {news, setNews, fetchNews} = useNewsContext();
  // console.log(state);
  
  useEffect(() => {
    (async()=>{
      const data = await fetchNews();
      // console.log(data);
      setNews(data.articles);
    })()
    
  }, []);

  const NewsCard = ({details}) => {
    return (
      <div className="card bg-base-content text-black shadow-sm">
        <figure className="px-5 pt-5">
          <img
            src={details?.urlToImage}
            alt="Shoes"
            className="rounded-xl aspect-video object-contain"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title line-clamp-2">{details?.title}</h2>
          <p className="line-clamp-3">
            {details?.description}
          </p>
          <div className="card-actions">
            <button onClick={()=>window.open(details.url)} className="btn btn-primary">Read More</button>
          </div>
        </div>
      </div>
    );
  };
  return (
  <>
    <div className="grid grid-cols-4 gap-5 mb-5">
      {news.map((newsDetails, index)=>{
        return <NewsCard key={index} details={newsDetails} />
      })}
    </div>
  </>
);

};

export default News;
