import { MoneyItem } from "./money";

export interface EditModalProps {
  option: "Income" | "Expense";
  placeholder: "Salary" | "Electricity bill";
  item?: MoneyItem;
}
