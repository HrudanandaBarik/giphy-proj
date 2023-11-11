'use client'
import Image from 'next/image'

import { useRouter } from 'next/navigation'


export default function Home() {
  const router = useRouter();
  return (
   <main >
     <h1 className="text-center text-2xl font-bold mt-7">WELCOME <span className='text-teal-900 outline-dashed outline-2 outline-orange-400'>To GIPHY</span></h1>
      
      
      <div className="flex  items-center justify-center h-[90vh]">
     
      <div className="flex flex-row gap-10">
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
