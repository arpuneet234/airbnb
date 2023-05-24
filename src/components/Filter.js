import React from 'react'

const Filter = (props) => {
  return (
    <div className='text-white  bg-[#ff385c] flex items-center gap-2 py-1 px-3 sm:px-4 rounded-full hover:bg-white hover:text-[#ff385c] hover:font-bold duration-200 ease-out text-[15px] sm:text-[16px]'>
        
        {props.icon}
        {props.title}
      
    </div>
  )
}

export default Filter
