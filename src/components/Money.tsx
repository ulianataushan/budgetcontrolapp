import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Box, TextField, Button } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import { MoneyProps } from "../types/money";
import MoneyTable from "./MoneyTable";
import { useDispatch } from "react-redux";
import { addExpense } from "../redux/reducers/expenses";
import { addIncome } from "../redux/reducers/incomes";

const Money = ({ option, placeholder }: MoneyProps) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");

  const dispatch = useDispatch();

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
      component="form"
      autoComplete="off"
      onSubmit={(e) => onSubmit(e)}
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={2}
    >
      <TextField
        required
        label={`Title of ${option}`}
        placeholder={placeholder}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        required
        label={`Amount of ${option}`}
        type="number"
        //value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
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
        variant="outlined"
        endIcon={<AddCircleIcon color="secondary" />}
        size="small"
        color="primary"
      >
        Save
      </Button>
      <MoneyTable option={option} />
    </Box>
  );
};

export default Money;
