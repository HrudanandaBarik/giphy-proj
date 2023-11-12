'use client'
import React, { useState } from 'react';
import styles from './search.module.css'
import { useGlobal } from '@/context/global';




export default function Search({setRendered}) {
  const {searchGiffs} = useGlobal();
  const [query, setQuery] = useState('')
  const handleSubmit = (e) =>{
     e.preventDefault()
     searchGiffs(query)
     setRendered('search')
     setQuery('')
  }

  const handleChange = (e)=> {
    setQuery(e.target.value)
  }

  return (
    <div className={styles.searchwrapper}>
       <form action='' onSubmit={handleSubmit}>
       <input 
         type='text' 
         value={query}
         onChange={handleChange}
         className={styles.inputhandle}
         placeholder='Search your gifs..'/>
         <button className={styles.submitbtn}>Search</button>
       </form>
    </div>
   )
  
}


