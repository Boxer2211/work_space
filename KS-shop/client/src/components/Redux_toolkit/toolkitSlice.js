import { createSlice } from "@reduxjs/toolkit";
import 'firebase/firestore'
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {useAuthState} from 'react-firebase-hooks/auth' 

const app = initializeApp({
  apiKey: "AIzaSyB81DqWQRd06DWWU0BgeVzpB21yPqPpNHM",
  authDomain: "ks-shop-e366c.firebaseapp.com",
  projectId: "ks-shop-e366c",
  storageBucket: "ks-shop-e366c.appspot.com",
  messagingSenderId: "828405183947",
  appId: "1:828405183947:web:b29acc12132327e0f1b24e",
  measurementId: "G-Q7KT78HM2T"
});

const auth = getAuth(app);


//const [user] = useAuthState()


export const toolkitSlise = createSlice({
    name: 'toolkitUser',      // название слайса
    initialState: {       //    дефолтное состояние
        userAuth: auth,
        favorite: [],
        basket: []
    },  
    reducers: {             // actions
        AddFavorit(state, action){
            state.favorite.push(action.payload)
        },
        RemoveFavorit(state, action){
            state.favorite = state.favorite.filter(data => data.id != action.payload)
        },
        AddBasket(state, action){
            state.basket.push(action.payload)
        },
        RemoveBasket(state, action){
            state.basket = state.basket.filter(data => data.id != action.payload)
        },
    }               
})

export default toolkitSlise.reducer
export const {AddFavorit, RemoveFavorit,AddBasket,RemoveBasket} = toolkitSlise.actions