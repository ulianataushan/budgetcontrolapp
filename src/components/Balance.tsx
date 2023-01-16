import React, { useState } from "react";

import { Button, Stack, TextField } from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

import { BalanceProps } from "../types/balance";

const Balance = ({ balance, setSavings }: BalanceProps) => {
  const [amount, setAmount] = useState(0);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSavings((savings) => savings + amount);
    setAmount(0);
  };

  return (
    <Stack direction="column" alignItems="center" spacing={1.5}>
      <TextField
        sx={{ width: 350, background: "#8194de" }}
        color="secondary"
        defaultValue={`Current balance: ${balance}`}
        InputProps={{
          readOnly: true,
        }}
      />
      <Stack
        component="form"
        onSubmit={(e) => onSubmit(e)}
        direction="column"
        spacing={1}
      >
        <TextField
          sx={{ width: 350 }}
          label="Transfer to savings"
          type="number"
          name="addSaving"
          onChange={(e) =>
            Number(e.target.value) <= balance
              ? setAmount(Number(e.target.value))
              : alert("You can't transfer more than your current balance")
          }
        />
        <Button
          sx={{ width: 350 }}
          type="submit"
          startIcon={<DoubleArrowIcon />}
          variant="outlined"
          size="small"
          color="primary"
        >
          Transfer
        </Button>
      </Stack>
    </Stack>
  );
};

export default Balance;
