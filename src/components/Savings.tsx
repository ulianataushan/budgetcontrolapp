import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addExpense } from "../redux/reducers/expenses";
import { SavingsProps } from "../types/savings";

const Savings = ({ savings }: SavingsProps) => {
  const [target, setTarget] = useState(0);

  const resetTarget = () => setTarget(0);
  const incomes = useSelector((state: any) => state.incomeReducer);
  const expenses = useSelector((state: any) => state.expenseReducer);

  console.log("incomes state: ", incomes);
  console.log("expenses state: ", expenses);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={(e) => onSubmit(e)}>
        <label htmlFor="target">Enter current target:</label>
        <br />
        <input
          type="number"
          name="target"
          id="target"
          onChange={(e) => setTarget(Number(e.target.value))}
        />
        <br />
        <input type="reset" defaultValue="Reset" onClick={resetTarget} />
        <br />
      </form>
      <p>Current target: {target}</p>
      <p>Current savings: {savings}</p>
      <p>
        Progress: {Math.floor(target && savings ? (savings / target) * 100 : 0)}
        %
      </p>
      <progress value={savings} max={target} />
    </div>
  );
};

export default Savings;
