import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { SavingsTarget } from "../../types/savings";

const initialState: SavingsTarget = {
  savings: 0,
  target: 0,
};

const savingsSlicer = createSlice({
  name: "savings",
  initialState,
  reducers: {
    setSavings: function (state: SavingsTarget, action: PayloadAction<number>) {
      state.savings = action.payload;
    },
    setTarget: function (state: SavingsTarget, action: PayloadAction<number>) {
      state.target = action.payload;
    },
  },
});

const savingsReducer = savingsSlicer.reducer;
export const { setSavings, setTarget } = savingsSlicer.actions;
export default savingsReducer;
