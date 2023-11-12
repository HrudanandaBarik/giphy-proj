'use client'
import Image from 'next/image'

import { useRouter } from 'next/navigation'


export default function Home() {
  const router = useRouter();
  return (
   <main >
     <h1 className="text-center text-2xl font-bold mt-7">WELCOME <span className='text-teal-900 outline-dashed outline-2 outline-orange-400'>To GIPHY</span></h1>
     <div className="flex  items-center justify-center">
          <h1 className='font-bold text-5xl flex mt-10'>If You are a new user Register otherwise Login</h1>
          
      </div>
      <div className="flex  items-center justify-center">
         <h2 className='font-bold text-3xl flex mt-10 text-orange-400'>To enter the world of Giphy</h2>
      </div>
      
      <div className="flex  items-center justify-center ">

      <div className="flex flex-row gap-10 mt-10">
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => router.push('/login')}>
        Login
        </button>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => router.push('/register')}>
        Register
        </button>
      </div>
      </div>
      
   </main>
  )
}
