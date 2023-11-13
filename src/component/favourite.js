'use client';
import { useGlobal } from '@/context/global';
import React from 'react'
import GiffItem from './giffItem';
import Masonry from 'react-masonry-css';

import styled from 'styled-components';
import Loader from './loader';

export default function Favourite({rendered}) {
    const {favourites, loading} = useGlobal();
    const breakpointColumnsObj = {
      default: 4,
      1400: 3,
      977: 2,
      500: 1
  };
    
  return (
    <FavouriteStyle>
       <h2>Favourites</h2>
       {loading && <Loader />}
        <Masonry
           breakpointCols={breakpointColumnsObj}
           className="my-masonry-grid"
           columnClassName="my-masonry-grid_column"
        >
           {
              favourites.map((giff) => {
                  return <GiffItem  key={giff.id} rendered={rendered} {...giff} giffItem={giff}/>
              })
            }
          </Masonry>
        
    </FavouriteStyle>
  )
}

const FavouriteStyle = styled.div`
 padding: 2rem;
 border-radius: 1rem;
 h2{
  font-size: 2rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: bold;
 }
.my-masonry-grid {
  display: -webkit-box; /* Not needed if autoprefixing */
  display: -ms-flexbox; /* Not needed if autoprefixing */
  display: flex;
  margin-left: -20px; /* gutter size offset */
  width: auto;
}
.my-masonry-grid_column {
  padding-left: 20px; /* gutter size */
  background-clip: padding-box;
}

/* Style your items */
.my-masonry-grid_column > div { /* change div to reference your elements you put in <Masonry> */
  margin-bottom: 40px;
}
`