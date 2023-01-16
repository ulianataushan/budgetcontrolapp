import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: number = 0;

const balanceSlicer = createSlice({
  name: "balance",
  initialState,
  reducers: {
    calculateBalance: (state) => {
      return;
    },
  },
});

const balanceReducer = balanceSlicer.reducer;
export const {} = balanceSlicer.actions;
export default balanceReducer;
