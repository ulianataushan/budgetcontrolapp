import React, { useContext } from "react";
import { IconButton, useTheme } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import { ThemeContext } from "../App";

const ToggleButton = () => {
  const colorMode = useContext(ThemeContext);
  const theme = useTheme();
  return (
    <IconButton onClick={() => colorMode.toggleMode()}>
      {theme.palette.mode === "light" ? <ModeNightIcon /> : <LightModeIcon />}
    </IconButton>
  );
};

export default ToggleButton;
