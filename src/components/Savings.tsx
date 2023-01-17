import { Box, Button, Stack, TextField } from "@mui/material";
import ReplayIcon from "@mui/icons-material/Replay";
import CircularProgress from "@mui/material/CircularProgress";

import { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "../redux/hooks/reduxHooks";
import { RootState } from "../redux/store";
import { setSavings, setTarget } from "../redux/reducers/savings";

const Savings = () => {
  const dispatch = useAppDispatch();
  const savings = useAppSelector(
    (state: RootState) => state.savingsReducer.savings
  );
  const target = useAppSelector(
    (state: RootState) => state.savingsReducer.target
  );
  const [progress, setProgress] = useState<number>(0);

  useEffect(
    function () {
      setProgress(target && savings ? (savings / target) * 100 : 0);
    },
    [target, savings, progress]
  );

  function reset() {
    if (savings) {
      dispatch(setSavings(0));
      dispatch(setTarget(0));
    }
  }

  return (
    <Stack direction="column" spacing={2}>
      <TextField
        sx={{ width: 350, background: "#8194de" }}
        color="secondary"
        value={`Current savings: ${savings}`}
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
        value={`Current target: ${target}`}
        InputProps={{
          readOnly: true,
        }}
      />
      <TextField
        sx={{ width: 350 }}
        label="Enter current target: "
        type="number"
        name="target"
        onChange={(e) => dispatch(setTarget(Number(e.target.value)))}
      />
      <Button
        onClick={reset}
        type="reset"
        variant="outlined"
        startIcon={<ReplayIcon />}
      >
        Reset
      </Button>
      <Box display="flex" justifyContent="center" padding={3}>
        <CircularProgress
          color="secondary"
          variant="determinate"
          value={Math.floor(target && savings ? (savings / target) * 100 : 0)}
        />
      </Box>
      <TextField
        sx={{ width: 350, background: "#8194de", marginBottom: 5 }}
        color="secondary"
        value={`Progress: ${progress.toFixed(0)}%`}
        InputProps={{
          readOnly: true,
        }}
      />
    </Stack>
  );
};

export default Savings;
