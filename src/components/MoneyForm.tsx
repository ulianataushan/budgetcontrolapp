import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Box, TextField, Button, InputAdornment } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SaveAsIcon from "@mui/icons-material/SaveAs";

import { addExpense, editExpense } from "../redux/reducers/expenses";
import { addIncome, editIncome } from "../redux/reducers/incomes";
import { useAppDispatch } from "../redux/hooks/reduxHooks";
import { MoneyFormProps } from "../types/form";

const MoneyForm = ({ option, placeholder, item }: MoneyFormProps) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");

  const dispatch = useAppDispatch();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (item) {
      if (item) {
        if (option === "Income") {
          dispatch(editIncome({ item, title, amount, date }));
        } else {
          dispatch(editExpense({ item, title, amount, date }));
        }
      }
    } else {
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
    }
  };

  useEffect(() => {
    if (item) {
      setTitle(item.title);
      setAmount(item.amount);
      setDate(item.date);
    }
  }, [item]);

  return (
    <Box
      sx={{ width: 500 }}
      component="form"
      autoComplete="off"
      onSubmit={(e) => onSubmit(e)}
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={2}
    >
      <TextField
        sx={{ width: 500 }}
        required
        label={`Title of ${option}`}
        placeholder={placeholder}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        sx={{
          width: 500,
        }}
        required
        label={`Amount of ${option}`}
        type="number"
        onChange={(e) => setAmount(Number(e.target.value))}
        value={amount || ""}
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          startAdornment: <InputAdornment position="start">€</InputAdornment>,
        }}
      />
      <TextField
        sx={{ width: 500 }}
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
        endIcon={
          item ? (
            <SaveAsIcon color="secondary" />
          ) : (
            <AddCircleIcon color="secondary" />
          )
        }
        size="large"
        color="primary"
      >
        {item ? "Edit" : "Save"}
      </Button>
    </Box>
  );
};

export default MoneyForm;
