import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: number = 0;

const balanceSlicer = createSlice({
  name: "balance",
  initialState,
  reducers: {
    setBalance: function (state: number, action: PayloadAction<number>) {
      return action.payload;
    },
  },
});

const balanceReducer = balanceSlicer.reducer;
export const { setBalance } = balanceSlicer.actions;
export default balanceReducer;
