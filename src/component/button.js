'use client'
import React from 'react';
import styles from './button.module.css'

export default function Button({name, onClick}) {
  return (
    <div>
        <button className={styles.btn} onClick={onClick}>
            {name}
        </button>
    </div>
  )
}
