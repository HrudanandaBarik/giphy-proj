'use client'
import React from 'react';
import styles from './search.module.css'




export default function Search() {
  return (
    <div className={styles.searchwrapper}>
       <form action=''>
       <input 
         type='text' 
         className={styles.inputhandle}
         placeholder='Search your gifs..'/>
         <button className={styles.submitbtn}>Search</button>
       </form>
    </div>
   )
  
}


