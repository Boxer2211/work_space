import { createSlice } from "@reduxjs/toolkit";



export const toolkitSlise = createSlice({
    name: 'toolkitUser',      // название слайса
    initialState: {       //    дефолтное состояние
        user: false,
    },  
    reducers: {             // actions
        Auth(state){
            state.user = true
        },
        SignOut(state){
            state.user = false
        }
    }               
})

export default toolkitSlise.reducer
export const {Auth, SignOut} = toolkitSlise.actions