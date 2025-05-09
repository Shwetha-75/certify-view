import React from 'react'
import Card from "./Card"
export default function Main() {

const data=[
    {
        id:1,
        name:"card1"
    }, {
        id:2,
        name:"card2"
    }, {
        id:3,
        name:"card3"
    },
    {
        id:4,
        name:"card4"
    }
]


  return (
    <div className='w-[80%] border gap-4 border-green-500 top-[250px] z-[-1] h-[45vh] relative flex flex-row items-center justify-center'>
        {data.map((item)=>
           <Card
           key={item.id}
           name={item.name}
           />
        )}
    </div>
  )
}
