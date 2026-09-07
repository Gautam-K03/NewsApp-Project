import React from "react";
import { useEffect } from "react";
import axios from "axios";
import api from "../config/axiosInstance";

const News = () => {
  const NewsCard = () => {
    return (
      <div className="card bg-base-content text-black shadow-sm">
        <figure className="px-5 pt-5">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Card Title</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
  };

  const fetchNews = async () => {
    // const response = await api.get(`/everything?q=bitcoin&apiKey=${import.meta.env.VITE_API_KEY}`);
    // console.log(response);
  }

  useEffect(() => {
    fetchNews();
  }, []);

    return (
    <>
      <div className="grid grid-cols-4 gap-5 mb-5">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </>
  );
};

export default News;
