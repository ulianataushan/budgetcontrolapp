import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MoneyItem } from "../../types/money";

const initialState: MoneyItem[] = [];

const expenseSlicer = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpense: (state, action: PayloadAction<MoneyItem>) => {
      return [...state, action.payload];
    },
    deleteExpense: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    sortExpenseTitle: (state, action) => {
      if (action.payload === "asc") {
        state.sort((a, b) =>
          a.title.localeCompare(b.title)
        );
      } else {
        state.sort((a, b) =>
        b.title.localeCompare(a.title)
        );
      }
    },
    sortExpenseAmount: (state, action) => {
      if (action.payload === "asc") {
        state.sort((a, b) => a.amount - b.amount);
      } else {
        state.sort((a, b) => b.amount - a.amount);
      }
    },
    sortExpenseDate: (state, action) => {
      if (action.payload === "asc") {
        state.sort((a, b) => (a.date > b.date ? 1 : -1));
      } else {
        state.sort((a, b) => (a.date < b.date ? 1 : -1));
      }
    },
  },
});

const expenseReducer = expenseSlicer.reducer;
export const {
  addExpense,
  deleteExpense,
  sortExpenseTitle,
  sortExpenseAmount,
  sortExpenseDate,
} = expenseSlicer.actions;
export default expenseReducer;
