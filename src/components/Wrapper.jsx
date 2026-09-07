import React from 'react'

const Wrapper = ({children}) => {
  return (
    <div className='max-w-[90%] mx-auto bg-black/50 rounded-lg shadow-sm'>
        {children}
    </div>
  )
}

export default Wrapper
