import { createSlice } from "@reduxjs/toolkit";
import { MoneyItem } from "../../types/money";

const initialState: MoneyItem[] = [
  {
    title: "first item",
    amount: 23,
    date: "first date",
    id: "skjvbkehvs",
  },
];

const expenseSlicer = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpense: (state, action) => {
      console.log("AddExpense is Invoked");
      return [...state, action.payload];
    },
    deleteExpense: (state, action) => {
      console.log("DeleteItem Invoked");
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

const expenseReducer = expenseSlicer.reducer;
export const { addExpense, deleteExpense } = expenseSlicer.actions;
export default expenseReducer;
