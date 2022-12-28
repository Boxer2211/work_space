import { createSlice } from "@reduxjs/toolkit";


const toolkitSLice = createSlice({
    name: "tollkit",
    initialState: {
        users: [],
        oneUser: {}
    },
    reducers: {
        setUsers(state, action){
            state.users = action.payload
        },
        putUser(state, action){
            state.oneUser = action.payload
        }     
    }
})

export default toolkitSLice.reducer
export const {setUsers, putUser} = toolkitSLice.actions