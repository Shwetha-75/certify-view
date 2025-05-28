import React from 'react'

export default function Card({key,name}) {
  return (
     <div key={key} className=''>
      <h1 className='text-white text-center'>{name}</h1>
    </div>
  )
}
