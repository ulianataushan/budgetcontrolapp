import { MoneyItem } from "./money";

export interface MoneyFormProps {
  option: "Income" | "Expense";
  placeholder: "Salary" | "Electricity bill";
  item?: MoneyItem;
}
