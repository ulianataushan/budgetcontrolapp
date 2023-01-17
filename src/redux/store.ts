import { configureStore } from "@reduxjs/toolkit";
import incomeReducer from "./reducers/incomes";
import expenseReducer from "./reducers/expenses";
import balanceReducer from "./reducers/balance";
import savingsReducer from "./reducers/savings";

const store: any = configureStore({
  reducer: {
    incomeReducer,
    expenseReducer,
    balanceReducer,
    savingsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
