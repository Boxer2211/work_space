import {configureStore, combineReducers} from '@reduxjs/toolkit'
import toolkitSlice from './toolkitSlice'

const rootReduser = combineReducers( {
    toolkit: toolkitSlice 
})

export const store = configureStore ({
    reducer: rootReduser,
})