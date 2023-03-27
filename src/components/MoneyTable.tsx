import { useState } from "react";

import {
  Button,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";

import {
  deleteIncome,
  sortIncomeAmount,
  sortIncomeTitle,
  sortIncomeDate,
} from "../redux/reducers/incomes";
import {
  deleteExpense,
  sortExpenseTitle,
  sortExpenseAmount,
  sortExpenseDate,
} from "../redux/reducers/expenses";
import EditModal from "./EditModal";
import { MoneyItem, MoneyTableProps } from "../types/money";
import { useAppDispatch, useAppSelector } from "../redux/hooks/reduxHooks";

const MoneyTable = ({ option, placeholder }: MoneyTableProps) => {
  const list: MoneyItem[] = useAppSelector((state) =>
    option === "Income" ? state.incomeReducer : state.expenseReducer
  );
  const dispatch = useAppDispatch();

  const onDelete = (id: string) => {
    option === "Income"
      ? dispatch(deleteIncome(id))
      : dispatch(deleteExpense(id));
  };

  const formatDate = (date: string) => {
    const [year, month, day] = date.split("-");
    const result = `${day}/${month}/${year}`;
    return result;
  };

  const [order, setOrder] = useState<"asc" | "desc">("asc");

  const sortByTitle = () => {
    if (option === "Income") {
      dispatch(sortIncomeTitle(order));
      if (order === "asc") {
        setOrder("desc");
      } else {
        setOrder("asc");
      }
    } else {
      dispatch(sortExpenseTitle(order));
      if (order === "asc") {
        setOrder("desc");
      } else {
        setOrder("asc");
      }
    }
  };

  const sortByAmount = () => {
    if (option === "Income") {
      dispatch(sortIncomeAmount(order));
      if (order === "asc") {
        setOrder("desc");
      } else {
        setOrder("asc");
      }
    } else {
      dispatch(sortExpenseAmount(order));
      if (order === "asc") {
        setOrder("desc");
      } else {
        setOrder("asc");
      }
    }
  };

  const sortByDate = () => {
    if (option === "Income") {
      dispatch(sortIncomeDate(order));
      if (order === "asc") {
        setOrder("desc");
      } else {
        setOrder("asc");
      }
    } else {
      dispatch(sortExpenseDate(order));
      if (order === "asc") {
        setOrder("desc");
      } else {
        setOrder("asc");
      }
    }
  };

  return (
    <TableContainer
      sx={{
        mt: 3,
        mb: 5,
        height: 300,
      }}
    >
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>
              <Button
                color="primary"
                onClick={() => sortByTitle()}
                endIcon={<SortByAlphaIcon />}
              >
                Title
              </Button>
            </TableCell>
            <TableCell>
              <Button
                color="primary"
                onClick={() => sortByAmount()}
                endIcon={<UnfoldMoreIcon />}
              >
                Amount
              </Button>
            </TableCell>
            <TableCell>
              <Button
                color="primary"
                onClick={() => sortByDate()}
                endIcon={<UnfoldMoreIcon />}
              >
                Date
              </Button>
            </TableCell>
            <TableCell>ACTIONS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.title}</TableCell>
              <TableCell>{`€ ${item.amount}`}</TableCell>
              <TableCell>{formatDate(item.date)}</TableCell>
              <TableCell>
                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={0.5}
                >
                  <EditModal
                    option={option}
                    placeholder={placeholder}
                    item={item}
                  />
                  <IconButton
                    onClick={() => onDelete(item.id)}
                    size="small"
                    color="primary"
                  >
                    <DeleteOutlineIcon />
                  </IconButton>
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MoneyTable;
