import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Box, TextField, Button } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import { MoneyProps } from "../types/money";
import MoneyTable from "./MoneyTable";
import { addExpense } from "../redux/reducers/expenses";
import { addIncome } from "../redux/reducers/incomes";
import { useAppDispatch } from "../redux/hooks/reduxHooks";

const Money = ({ option, placeholder }: MoneyProps) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");

  const dispatch = useAppDispatch();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (option === "Expense") {
      dispatch(
        addExpense({
          title,
          amount,
          date,
          id: uuidv4(),
        })
      );
    } else {
      dispatch(
        addIncome({
          title,
          amount,
          date,
          id: uuidv4(),
        })
      );
    }
  };

  return (
    <Box
      sx={{ width: 350 }}
      component="form"
      autoComplete="off"
      onSubmit={(e) => onSubmit(e)}
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={2}
    >
      <TextField
        sx={{ width: 350 }}
        required
        label={`Title of ${option}`}
        placeholder={placeholder}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        sx={{ width: 350 }}
        required
        label={`Amount of ${option}`}
        type="number"
        onChange={(e) => setAmount(Number(e.target.value))}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        sx={{ width: 350 }}
        required
        label={`Date of ${option}`}
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Button
        type="submit"
        variant="outlined"
        endIcon={<AddCircleIcon color="secondary" />}
        size="large"
        color="primary"
      >
        Save
      </Button>
      <MoneyTable option={option} />
    </Box>
  );
};

export default Money;
