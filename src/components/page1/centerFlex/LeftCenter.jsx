import React from 'react'

const LeftCenter = () => {
  return (
    <div className='bg-black text-white flex items-center gap-10 py-4 pl-12 pr-4 rounded-e-full'>
      <h1 className='text-lg font-medium leading-6'>
        Located <br />
        in the <br />
        India
      </h1>
      <div className='h-[5vw] w-[5vw] bg-[#FFFFFF] rounded-full flex items-center justify-center'>
        <img src="src/assets/globe.gif" alt="" />
      </div>
    </div>
  )
}

export default LeftCenter