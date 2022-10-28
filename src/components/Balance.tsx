import React, { useState } from "react";
import { BalanceProps } from "../types/balance";
//import Savings from "./Savings";

const Balance = ({ balance, setSavings }: BalanceProps) => {
  const [amount, setAmount] = useState(0);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSavings((savings) => savings + amount);
    setAmount(0);
  };

  return (
    <div>
      <p>Current balance: {balance}</p>
      <form onSubmit={(e) => onSubmit(e)}>
        <label htmlFor="addSaving">Transfer to savings account</label>
        <br />
        <input
          type="number"
          name="addSaving"
          id="addSaving"
          value={amount}
          onChange={(e) =>
            Number(e.target.value) <= balance
              ? setAmount(Number(e.target.value))
              : alert("You can't transfer more than your current balance")
          }
        />
        <br />
        <button type="submit">Transfer</button>
      </form>
    </div>
  );
};

export default Balance;
