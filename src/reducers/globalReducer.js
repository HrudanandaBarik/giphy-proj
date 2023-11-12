'use client';
import { GET_SEARCH, GET_TRENDING, LOADING } from '@/utils/globalAction';
import React from 'react';

export const globalReducer = (state, action) => {
   switch(action.type){
    case LOADING:
        return {...state, loading: true}
    case GET_TRENDING:
        return {
            ...state, 
            loading: false, 
            trending: action.payload
        }
    case GET_SEARCH:
        return {
             ...state,
              loading: false,
              searchResults: action.payload
        }
    default:
        break    
   }
   return state;
}
