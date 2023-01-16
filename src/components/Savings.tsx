import { Box, Button, Stack, TextField } from "@mui/material";
import ReplayIcon from "@mui/icons-material/Replay";

import { useState } from "react";

import { SavingsProps } from "../types/savings";
import CircularProgress from "@mui/material/CircularProgress";

const Savings = ({ savings }: SavingsProps) => {
  const [target, setTarget] = useState(0);
  const resetTarget = () => setTarget(0);

  return (
    <Stack direction="column" spacing={1.5}>
      <Box component="form">
        <TextField
          sx={{ width: 350 }}
          label="Enter current target: "
          type="number"
          name="target"
          onChange={(e) => setTarget(Number(e.target.value))}
        />
      </Box>
      <Button
        onClick={resetTarget}
        type="reset"
        variant="outlined"
        startIcon={<ReplayIcon />}
      >
        Reset
      </Button>
      <TextField
        sx={{ width: 350, background: "#8194de" }}
        color="secondary"
        defaultValue={`Current savings: ${savings}`}
        InputProps={{
          readOnly: true,
        }}
      />
      <TextField
        sx={{
          width: 350,
          background: "#8194de",
        }}
        color="secondary"
        defaultValue={`Current target: ${target}`}
        InputProps={{
          readOnly: true,
        }}
      />
      <TextField
        sx={{ width: 350, background: "#8194de" }}
        color="secondary"
        defaultValue={`Progress: ${Math.floor(
          target && savings ? (savings / target) * 100 : 0
        )}%`}
        InputProps={{
          readOnly: true,
        }}
      />
      <CircularProgress
        color="secondary"
        variant="determinate"
        value={Math.floor(target && savings ? (savings / target) * 100 : 0)}
      />
    </Stack>
  );
};

export default Savings;
