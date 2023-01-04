import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deleteIncome } from "../redux/reducers/incomes";
import { RootState } from "../redux/store";
import { MoneyTableProps } from "../types/money";

const MoneyTable = ({ option }: MoneyTableProps) => {
  const list = useSelector((state: RootState) =>
    option === "Income" ? state.incomeReducer : state.expenseReducer
  );
  const dispatch = useDispatch();
  const onDelete = (id: string) => {
    dispatch(deleteIncome(id));
  };

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.amount}</TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCell>
                <Button onClick={() => onDelete(item.id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MoneyTable;
