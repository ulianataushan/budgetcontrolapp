import { Box } from "@mui/material";

import { MoneyProps } from "../types/money";
import MoneyTable from "./MoneyTable";
import MoneyForm from "./MoneyForm";

const Money = ({ option, placeholder }: MoneyProps) => {
  return (
    <Box sx={{ width: 500 }}>
      <MoneyForm option={option} placeholder={placeholder} />
      <MoneyTable option={option} placeholder={placeholder} />
    </Box>
  );
};

export default Money;
