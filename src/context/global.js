'use client'
import { globalReducer } from '@/reducers/globalReducer';
import { GET_SEARCH, GET_TRENDING, LOADING } from '@/utils/globalAction';
import React, {useContext, useEffect, useReducer} from 'react';
import axios from "axios";

const GlobalContext = React.createContext();
const apikey = 'HJ4KMvZiVHErK0hCCSWHJeLVLUsFogyS';
const baseUrl = "https://api.giphy.com/v1/gifs";


export const GlobalProvider = ({children}) => {
    const initialState = {
        loading: false,
        searchResults: [],
        trending: [],
        favourites: [],
    }

    const [state, dispatch] = useReducer(globalReducer, initialState);
    
    const getTrending = async () =>{
        dispatch({type: LOADING})
        const res = await axios.get(`${baseUrl}/trending?api_key=${apikey}&limit=30`)
        dispatch({type: GET_TRENDING, payload: res.data.data})
    }

    const searchGiffs = async (query) =>{
       dispatch({type: LOADING});
       const res = await axios.get(`${baseUrl}/search?api_key=${apikey}&q=${query}&limit=18`)
       dispatch({type: GET_SEARCH, payload: res.data.data})
    }
    

    useEffect(() =>{
        getTrending();
       
    }, [])

    return (
        <GlobalContext.Provider value={{
            ...state,
            searchGiffs
        }}>
             {children}
        </GlobalContext.Provider>
    )
}

export const useGlobal = () => {
    return useContext(GlobalContext)
}