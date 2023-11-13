'use client'
import { globalReducer } from '@/reducers/globalReducer';
import { ADD_TO_FAVOURITES, GET_FAVOURITES, GET_SEARCH, GET_TRENDING, LOADING } from '@/utils/globalAction';
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
    
    //trending
    const getTrending = async () =>{
        dispatch({type: LOADING})
        const res = await axios.get(`${baseUrl}/trending?api_key=${apikey}&limit=50`)
        dispatch({type: GET_TRENDING, payload: res.data.data})
    }

    //search
    const searchGiffs = async (query) =>{
       dispatch({type: LOADING});
       const res = await axios.get(`${baseUrl}/search?api_key=${apikey}&q=${query}&limit=18`)
       dispatch({type: GET_SEARCH, payload: res.data.data})
    }
    
    //favourites
    const saveToFavourites = (gif) => {
        const storedItems = JSON.parse(window.localStorage.getItem("myFavourites")) || []
        const existingItem = storedItems.find(item => item.id === gif.id);

        if(!existingItem){
            const items = [...storedItems, gif]
            window.localStorage.setItem("myFavourites", JSON.stringify(items));
            dispatch({type: ADD_TO_FAVOURITES, payload: gif});
            alert('Added to favourites');
        }else{
            alert('Already Exist');
        }
    }

    const getFromLocalstorage = () => {
        const storedItems = JSON.parse(window.localStorage.getItem("myFavourites")) || [];
        dispatch({type: GET_FAVOURITES, payload: storedItems})
    }

    const removeFromLocalStorage = (gif) =>{
        const storedItems = JSON.parse(window.localStorage.getItem("myFavourites")) || [];
        const items = storedItems.filter((item) => item.id !== gif.id);
        window.localStorage.setItem('myFavourites', JSON.stringify(items));
        getFromLocalstorage()
    }

    useEffect(() =>{
        getTrending();
        getFromLocalstorage()
    }, [])

    return (
        <GlobalContext.Provider value={{
            ...state,
            searchGiffs,
            saveToFavourites,
            removeFromLocalStorage
        }}>
             {children}
        </GlobalContext.Provider>
    )
}

export const useGlobal = () => {
    return useContext(GlobalContext)
}