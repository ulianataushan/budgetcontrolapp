import { createSlice } from "@reduxjs/toolkit";
import { MoneyItem } from "../../types/money";

const initialState: MoneyItem[] = [
  {
    title: "first item",
    amount: 23,
    date: "first date",
    id: "skj780vs",
  },
];

const incomeSlicer = createSlice({
  name: "incomes",
  initialState,
  reducers: {
    addIncome: (state, action) => {
      console.log("addIncome is invoked");
      return [...state, action.payload];
    },
    deleteIncome: (state, action) => {
      console.log("DeleteItem is Invoked");
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

const incomeReducer = incomeSlicer.reducer;
export const { addIncome, deleteIncome } = incomeSlicer.actions;
export default incomeReducer;
