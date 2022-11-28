import { createSlice } from "@reduxjs/toolkit";
import { MoneyItem } from "../../types/money";

const initialState: MoneyItem[] = [];

const incomeSlicer = createSlice({
  name: "incomes",
  initialState,
  reducers: {
    addIncome: () => {
      console.log("AddIncome Invoked");
    },
    deleteIncome: () => {
      console.log("DeleteItem Invoked");
    },
  },
});

const incomeReducer = incomeSlicer.reducer;

export default incomeReducer;
