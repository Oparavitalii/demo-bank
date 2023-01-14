import { createSlice } from "@reduxjs/toolkit";
interface IStore {
  amount:number,
  users: Array<any> | [{
    name: string,
    card: string,
    amount: number
  }] 
  
}


const initialStore :IStore= {
  amount: 1000,
  users: []
}

const bankStore = createSlice({
  name: "bank",
  initialState: initialStore,
  reducers: {
    increaseAmount: (state,action) => {
      state.amount+=action.payload;
    },
    addUser:(state,action) => {
      state.users.push(action.payload)
    }
  },
});

export const {increaseAmount,addUser} = bankStore.actions;
export default bankStore.reducer;
