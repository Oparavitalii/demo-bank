import { configureStore } from '@reduxjs/toolkit'

import bankStore from "./createSlice";

const store = configureStore({
    reducer: bankStore
})

export default store;