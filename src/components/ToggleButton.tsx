import React, { useContext } from "react";

import { Box, IconButton, useTheme } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import ModeNightIcon from "@mui/icons-material/ModeNight";

import { ThemeContext } from "../App";

const ToggleButton = () => {
  const colorMode = useContext(ThemeContext);
  const theme = useTheme();
  return (
    <Box margin={3}>
      <IconButton onClick={() => colorMode.toggleMode()}>
        {theme.palette.mode === "light" ? <ModeNightIcon /> : <LightModeIcon />}
      </IconButton>
    </Box>
  );
};

export default ToggleButton;
