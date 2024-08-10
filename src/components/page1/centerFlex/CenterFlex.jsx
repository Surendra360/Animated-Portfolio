import React from 'react'
import RightCenter from './RightCenter'
import LeftCenter from './LeftCenter'

const CenterFlex = () => {
  return (
    <div className='absolute top-[30vh] flex items-end justify-between w-full'>
      <LeftCenter />
      <RightCenter />
    </div>
  )
}

export default CenterFlex