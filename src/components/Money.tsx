import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Box, TextField, Button, List, ListItem } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import { MoneyProps } from "../types/money";

const Money = ({ option, placeholder, list, setList }: MoneyProps) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setList([{ amount, title, date, id: uuidv4() }, ...list]);
    setAmount(0);
    setTitle("");
    setDate("");
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
      <List>
        {list.length > 0 &&
          list.map((item) => (
            <ListItem key={item.id}>
              {item.title}, {item.amount}, {item.date}
            </ListItem>
          ))}
      </List>
    </Box>
  );
};

export default Money;
