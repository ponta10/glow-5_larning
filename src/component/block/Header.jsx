import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { CustomButton } from "../atoms/Form/CustomButton";
import { Fortune } from "../atoms/Fortune";
import { Stack } from "@mui/material";

export const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "#fff" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2, color: "#4EABBA" }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "#4EABBA" }}
          >
            PeerPerk
          </Typography>
          <Stack direction="row" gap={3}>
            <Fortune type="point" value={2000} />
            <Fortune type="coin" value={3000} />
            <CustomButton title="コンテンツを登録する" variant="contained" bgColor="#4EABBA" />
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
