import { createSlice } from "@reduxjs/toolkit";
interface IStore {
  amount: number;
  users:
    | Array<any>
    | [
        {
          name: string;
          card: string;
          amount: number;
        }
      ];
  savedMoney: number;
}

const initialStore: IStore = {
  amount: 1000,
  users: [],
  savedMoney: 0,
};

const bankStore = createSlice({
  name: "bank",
  initialState: initialStore,
  reducers: {
    increaseAmount: (state, action) => {
      state.amount += action.payload;
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
      state.amount -= action.payload.amount;
    },
    saveMoney: (state, action) => {
      state.savedMoney += action.payload;
      state.amount -= action.payload;
    },
    returnSavedMoney: (state) => {
      state.amount += state.savedMoney;
      state.savedMoney = 0;
    },
  },
});

export const { increaseAmount, addUser, saveMoney ,returnSavedMoney} = bankStore.actions;
export default bankStore.reducer;
