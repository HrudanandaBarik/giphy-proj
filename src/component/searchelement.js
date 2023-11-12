'use client'
import React from 'react'
import styled from 'styled-components';
import Masonry from 'react-masonry-css';
import GiffItem from './giffItem';
import Loader from './loader';
import { useGlobal } from '@/context/global';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';

export default function Searchelement() {
    const {searchResults, loading} = useGlobal();
    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    };

  return (
    <SearchStyle>
        <h2><FontAwesomeIcon icon={faList}/>Search Results</h2>
        {loading && <Loader />}
        <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
         >
                {
                    searchResults.map((giff) => {
                        return <GiffItem key={giff.id} {...giff} giffItem={giff} />
                    })
                }
            </Masonry>
    </SearchStyle>
  )
}

const SearchStyle = styled.div`
     padding: 2rem;
     border-radius: 1rem;
     h2{
        font-size: 2rem;
        margin-bottom: 1.5rem;
        display: flex;
        align-items: center;
        gap: 1rem;
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
        margin-bottom: 15px;
    }
`
