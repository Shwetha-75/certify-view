import React from 'react'

export default function Card({name}) {
  return (
    <div className=' w-[25%] text-white border border-green-500 left-4 h-[80%]'>
        <h1 className='text-white text-center'>{name}</h1>
    </div>
  )
}
