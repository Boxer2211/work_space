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
        },
        // updateUser(state, action){
        //     state.users = action.payload  
        // },
        removeUser(state, action){
            state.users = state.users.filter(data => data._id != action.payload)
        }

    }
})

export default toolkitSLice.reducer
export const {setUsers, putUser, removeUser} = toolkitSLice.actions