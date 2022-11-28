import React, { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";

import "./App.css";
import Money from "./components/Money";
import Balance from "./components/Balance";
import Savings from "./components/Savings";
import { MoneyItem } from "./types/money";

function App() {
  const [incomes, setIncomes] = useState<MoneyItem[]>([]);
  const [expenses, setExpenses] = useState<MoneyItem[]>([]);
  const [balance, setBalance] = useState(0);
  const [savings, setSavings] = useState(0);

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
      primary: {
        main: "#FFFFFF",
      },
      secondary: {
        main: "#4B99E6",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div className="accounts">
          <Money
            option="Income"
            placeholder="Salary"
            list={incomes}
            setList={setIncomes}
          />
          <Money
            option="Expense"
            placeholder="Electricity bill"
            list={expenses}
            setList={setExpenses}
          />
          <Savings savings={savings} />
        </div>
        <Balance balance={balance} setSavings={setSavings} />
      </div>
    </ThemeProvider>
  );
}

export default App;
