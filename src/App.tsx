import { createContext, useEffect, useState } from "react";
import { createTheme, Grid, ThemeProvider, CssBaseline } from "@mui/material";
import { Box } from "@mui/system";

import "./App.css";
import Money from "./components/Money";
import Balance from "./components/Balance";
import Savings from "./components/Savings";
import ToggleButton from "./components/ToggleButton";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

export const ThemeContext = createContext({ toggleMode: () => {} });

function App() {
  const [balance, setBalance] = useState(0);
  const [savings, setSavings] = useState(0);
  const [mode, setMode] = useState<"light" | "dark">("light");

  const incomes = useSelector((state: RootState) => state.incomeReducer);
  const expenses = useSelector((state: RootState) => state.expenseReducer);

  const totalIncome = incomes.reduce(
    (prev, current) => prev + current.amount,
    0
  );
  const totalExpense = expenses.reduce(
    (prev, current) => prev + current.amount,
    0
  );

  useEffect(() => {
    setBalance(totalIncome - totalExpense - savings);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [incomes, expenses, savings]);

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
        <Box className="App">
          <Grid container spacing={2}>
            <Grid item>
              <Money option="Income" placeholder="Salary" list={incomes} />
            </Grid>
            <Grid item>
              <Money
                option="Expense"
                placeholder="Electricity bill"
                list={expenses}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item>
              <Savings savings={savings} />
            </Grid>
            <Grid item>
              <Balance balance={balance} setSavings={setSavings} />
            </Grid>
          </Grid>
          <ToggleButton />
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
