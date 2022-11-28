import { createSlice } from "@reduxjs/toolkit";
import { MoneyItem } from "../../types/money";

const initialState: MoneyItem[] = [
  {
    title: "first item",
    amount: 23,
    date: "first date",
  },
];

const expenseSlicer = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpense: (state) => {
      state.push({
        title: "another item",
        amount: 30,
        date: "another date",
      });
      console.log("AddExpense is Invoked");
    },
    deleteExpense: () => {
      console.log("DeleteItem Invoked");
    },
  },
});

const expenseReducer = expenseSlicer.reducer;
export const { addExpense, deleteExpense } = expenseSlicer.actions;
export default expenseReducer;
