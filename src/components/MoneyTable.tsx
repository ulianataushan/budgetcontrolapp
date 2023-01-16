import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import { useAppDispatch, useAppSelector } from "../redux/hooks/reduxHooks";
import { deleteExpense } from "../redux/reducers/expenses";
import { deleteIncome } from "../redux/reducers/incomes";
import { MoneyTableProps } from "../types/money";

const MoneyTable = ({ option }: MoneyTableProps) => {
  const list = useAppSelector((state) =>
    option === "Income" ? state.incomeReducer : state.expenseReducer
  );
  const dispatch = useAppDispatch();
  const onDelete = (id: string) => {
    option === "Income"
      ? dispatch(deleteIncome(id))
      : dispatch(deleteExpense(id));
  };

  return (
    <TableContainer
      sx={{
        mt: 3,
        height: 300,
      }}
    >
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.amount}</TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCell>
                <IconButton
                  onClick={() => onDelete(item.id)}
                  size="small"
                  color="primary"
                >
                  <DeleteOutlineIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MoneyTable;
