import React from 'react'

export default function TopNavigationBar() {
  return (
    <>
        <div className='w-[100%] flex justify-center absolute top-5 items-center'>
            <ul className='flex w-[80%] justify-between p-6'>
                <li className='text-white text-[1.3rem]'>Logo</li>
                <li className='text-white text-[1.3rem]'>SigIn/SigUp</li>
            </ul>
        </div>
    </>
  )
}
