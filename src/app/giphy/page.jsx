'use client'
import Button from '@/component/button'
import Search from '../../component/search'
import React, { useState } from 'react'
import { GlobalProvider, useGlobal } from '@/context/global'
import Trending from '@/component/trending'

export default function Giphy() {

  const [rendered, setRendered] = useState('trending');

  const content = () => {
    switch(rendered){
      case 'trending':
        return <Trending/>
       case 'favourite':
         return <Trending/>
       case 'search':
        return <Trending/>
       default:
        return <Trending/>    
    }
  }
  
  return (
    <>
      <Search/>
      <div className='flex flex-row items-center justify-center gap-10 mt-2'>
        <Button
          name={'Favourite'}
          onClick={() =>{
            setRendered('favourite')
          }}
        />
        <Button
          name={'Trending'}
          onClick={() =>{
            setRendered('trending')
          }}
        />
      </div>
      <main className='py-2 px-32'>
         {content()}
      </main>
    </>
  )
}
