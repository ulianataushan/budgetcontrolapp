import React, { useState } from "react";
import { MoneyProps } from "../types/money";

import { v4 as uuidv4 } from "uuid";

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
    <div>
      <form onSubmit={(e) => onSubmit(e)}>
        <div>
          <label htmlFor="title">{option} source</label>
          <br />
          <input
            type="text"
            name="title"
            id="title"
            placeholder={placeholder}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="amount">Amount of {option}</label>
          <br />
          <input
            type="number"
            name="amount"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor="date">Date of {option}</label>
          <br />
          <input
            type="date"
            name="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <button type="submit">Save</button>
      </form>
      <ul>
        {list.length > 0 &&
          list.map((item) => (
            <li key={item.id}>
              {item.title}, {item.amount}, {item.date}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Money;
