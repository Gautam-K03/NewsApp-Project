import React from 'react'
import Wrapper from './Wrapper'
import { useNewsContext } from "../context/NewsContext";

const Button = () => {

    const categoryS = ['Business','Entertainment','General','Health','Science','Sports','Technology'];

    const {setNews, fetchNews} = useNewsContext();

    const handleClick = async(e)=>{
      const cat = e.target.value;
      const data = await fetchNews(`/everything?q=${cat}`);
      setNews(data.articles);
    } 

  return (
    <>
    <div className="flex justify-center gap-4 m-5 flex-wrap">
      {categoryS.map((category) => (
        <button onClick={handleClick} value={category} key={category} className="btn btn-outline btn-primary">
          {category}
        </button>
      ))}
    </div>
    </>
  )
}

export default Button
