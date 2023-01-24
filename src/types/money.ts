export interface MoneyItem {
  title: string;
  amount: number;
  date: string;
  id: string;
}

export interface MoneyProps {
  option: "Income" | "Expense";
  placeholder: "Salary" | "Electricity bill";
}

export interface MoneyTableProps {
  option: string;
}
