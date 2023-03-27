import { createContext, useEffect, useState } from "react";

import { createTheme, Grid, ThemeProvider, CssBaseline } from "@mui/material";
import { Box } from "@mui/system";

import "./App.css";
import Header from "./components/Header";
import Money from "./components/Money";
import Balance from "./components/Balance";
import Savings from "./components/Savings";
import ToggleButton from "./components/ToggleButton";

import { RootState } from "./redux/store";
import { useAppDispatch, useAppSelector } from "./redux/hooks/reduxHooks";
import { setBalance } from "./redux/reducers/balance";

export const ThemeContext = createContext({ toggleMode: () => {} });

function App() {
  const [mode, setMode] = useState<"light" | "dark">("dark");
  const dispatch = useAppDispatch();
  const incomes = useAppSelector((state: RootState) => state.incomeReducer);
  const expenses = useAppSelector((state: RootState) => state.expenseReducer);
  const savings = useAppSelector(
    (state: RootState) => state.savingsReducer.savings
  );

  const totalIncome = incomes.reduce(
    (prev: any, current: { amount: any }) => prev + current.amount,
    0
  );
  const totalExpense = expenses.reduce(
    (prev: any, current: { amount: any }) => prev + current.amount,
    0
  );
  useEffect(
    function () {
      dispatch(setBalance(totalIncome - totalExpense - savings));
    },
    [incomes, expenses, savings, totalExpense, totalIncome, dispatch]
  );

  const theme = createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            primary: {
              main: "#274690",
            },
            secondary: {
              main: "#5F7BC7",
            },
            text: {
              primary: "#302B27",
              secondary: "#1B264F",
            },
            background: {
              default: "#FAFAFA",
            },
          }
        : {
            primary: {
              main: "#FAFAFA",
            },
            secondary: {
              main: "#4C68B3",
            },
            text: {
              primary: "#FAFAFA",
              secondary: "#8194de",
            },
            background: {
              default: "#21222A",
            },
          }),
    },
  });

  const manageTheme = {
    toggleMode: () => {
      setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    },
  };

  return (
    <ThemeContext.Provider value={manageTheme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Box
          className="App"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="center"
            height="800"
          >
            <Grid item>
              <Money option="Income" placeholder="Salary" />
            </Grid>
            <Grid item>
              <Money option="Expense" placeholder="Electricity bill" />
            </Grid>
            <Grid item>
              <Grid container spacing={2} direction="column">
                <Grid item>
                  <Savings />
                </Grid>
                <Grid item>
                  <Balance />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <ToggleButton />
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
