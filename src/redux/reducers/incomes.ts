import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MoneyItem } from "../../types/money";

const initialState: MoneyItem[] = [];

const incomeSlicer = createSlice({
  name: "incomes",
  initialState,
  reducers: {
    addIncome: (state, action: PayloadAction<MoneyItem>) => {
      return [...state, action.payload];
    },
    deleteIncome: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    editIncome: (state, action) => {
      const editItem: MoneyItem = {
        title: action.payload.title,
        amount: action.payload.amount,
        date: action.payload.date,
        id: action.payload.item.id,
      };

      const editIndex = state.findIndex(
        (item) => item.id === action.payload.item.id
      );
      state.splice(editIndex, 1, editItem);
    },
    sortIncomeTitle: (state, action) => {
      if (action.payload === "asc") {
        state.sort((a, b) => a.title.localeCompare(b.title));
      } else {
        state.sort((a, b) => b.title.localeCompare(a.title));
      }
    },
    sortIncomeAmount: (state, action) => {
      if (action.payload === "asc") {
        state.sort((a, b) => a.amount - b.amount);
      } else {
        state.sort((a, b) => b.amount - a.amount);
      }
    },
    sortIncomeDate: (state, action) => {
      if (action.payload === "asc") {
        state.sort((a, b) => (a.date > b.date ? 1 : -1));
      } else {
        state.sort((a, b) => (a.date < b.date ? 1 : -1));
      }
    },
  },
});

const incomeReducer = incomeSlicer.reducer;
export const {
  addIncome,
  deleteIncome,
  editIncome,
  sortIncomeTitle,
  sortIncomeAmount,
  sortIncomeDate,
} = incomeSlicer.actions;
export default incomeReducer;
