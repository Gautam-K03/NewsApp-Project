import React from 'react'
import Wrapper from './Wrapper'

const Button = () => {

    const categoryS = ['Business','Entertainment','General','Health','Science','Sports','Technology']

  return (
    <>
    <div className="flex justify-center gap-4 m-5 flex-wrap">
      {categoryS.map((category) => (
        <button key={category} className="btn btn-outline btn-primary">
          {category}
        </button>
      ))}
    </div>
    </>
  )
}

export default Button
