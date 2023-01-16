import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

const Header = () => {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters>
          <AccountBalanceWalletIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Budget Control App
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
