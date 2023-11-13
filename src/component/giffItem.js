'use client'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components'
import Modal from './modal';
import { useGlobal } from '@/context/global';
import Loader from './loader';

export default function GiffItem({
    id, 
    title, 
    embed_url, 
    rendered,
    url: link, 
    images: {original: {url}}}) {
      const {loading, saveToFavourites, removeFromLocalStorage} = useGlobal()

      const [modal, setModal] = useState(false);
  return (
    <GiffStyled>
      {modal && <Modal title={title} giff={url} link={link} embed_url={embed_url} setModal={setModal} />}
       {loading ? <Loader/> : 
           <div className="gif" onDoubleClick={() => {
            setModal(true)
        }}>
           <img src={url} alt={title}/>
           <div className='love' onClick={() => {
            if(rendered === 'favourite'){
               removeFromLocalStorage({
                  id,
                  title,
                  url: link,
                  images: {
                     original:{url}
                  }
               })
            } else{
              saveToFavourites({
                   id,
                   title,
                   url: link,
                   images: {
                      original:{url}
                   }
            })
            }
           }}>
             <FontAwesomeIcon icon={faHeart} />
           </div>
        </div>
       }
    </GiffStyled>
  )
}

const GiffStyled = styled.div`
   .gif{
     position: relative;
   }
   img{
     width:100%;
     border-radius: 5px;
   }
   .love{
    position: absolute;
    top: 1rem;
    right:1rem;
    cursor: pointer;
    font-size: 1.8rem;
    color: yellow;
    :hover{
        transform: scale(1.17);
        transition: all .3s ease-in-out;
       }
   }
   
`
